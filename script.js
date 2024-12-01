let currentSentenceIndex = 0;
let userAnswers = [];

const app = document.getElementById("app");
const instructions = document.getElementById("instructions");
const quiz = document.getElementById("quiz");
const sentenceElement = document.getElementById("sentence");
const results = document.getElementById("results");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextSentence);

function startQuiz() {
  instructions.classList.add("hidden");
  quiz.classList.remove("hidden");
  displaySentence();
}

function displaySentence() {
  const currentSentence = sentences[currentSentenceIndex];
  sentenceElement.textContent = currentSentence.text;
}

function nextSentence() {
  const correctness = document.querySelector('input[name="correctness"]:checked');
  const selectedTags = Array.from(document.querySelectorAll('#tags input:checked')).map(
    (input) => input.value
  );

  if (!correctness) {
    alert("Please select whether the sentence is correct or incorrect.");
    return;
  }

  userAnswers.push({
    correctness: correctness.value,
    tags: selectedTags
  });

  currentSentenceIndex++;

  if (currentSentenceIndex < sentences.length) {
    clearInputs();
    displaySentence();
  } else {
    quiz.classList.add("hidden");
    displayResults();
  }
}

function clearInputs() {
  document.querySelectorAll('input[name="correctness"]').forEach((input) => (input.checked = false));
  document.querySelectorAll('#tags input').forEach((input) => (input.checked = false));
}

function displayResults() {
  results.classList.remove("hidden");

  let correctAnswers = 0;
  const categoryResults = {};
  let comparisonHTML = `<h3>Detailed Comparison</h3><ul>`;

  sentences.forEach((sentence, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect =
      userAnswer.correctness === (sentence.correct ? "correct" : "incorrect") &&
      JSON.stringify(userAnswer.tags.sort()) === JSON.stringify(sentence.tags.sort());

    if (isCorrect) {
      correctAnswers++;
    }

    sentence.categories.forEach((category) => {
      if (!categoryResults[category]) categoryResults[category] = { correct: 0, total: 0 };
      categoryResults[category].total++;
      if (isCorrect) categoryResults[category].correct++;
    });

    comparisonHTML += `<li>
      <strong>Sentence:</strong> ${sentence.text} <br>
      <strong>Your Answer:</strong> ${userAnswer.correctness}, Tags: ${userAnswer.tags.join(", ") || "None"} <br>
      <strong>Correct Answer:</strong> ${sentence.correct ? "correct" : "incorrect"}, Tags: ${sentence.tags.join(", ") || "None"} <br>
      <strong>Categories:</strong> ${sentence.categories.join(", ")} <br>
      <strong>Source:</strong> ${sentence.source} <br>
      <strong>Result:</strong> ${isCorrect ? "✅ Correct" : "❌ Incorrect"}
    </li><hr>`;
  });

  comparisonHTML += `</ul>`;

  const totalScore = Math.round((correctAnswers / sentences.length) * 100);

  let resultHTML = `<h2>Your Results</h2>`;
  resultHTML += `<p>Total Score: ${totalScore}%</p>`;
  resultHTML += `<h3>Category Breakdown</h3><ul>`;
  for (const [category, stats] of Object.entries(categoryResults)) {
    const categoryScore = Math.round((stats.correct / stats.total) * 100);
    resultHTML += `<li>${category}: ${categoryScore}%</li>`;
  }
  resultHTML += `</ul>`;
  resultHTML += comparisonHTML;

  results.innerHTML = resultHTML;
}
