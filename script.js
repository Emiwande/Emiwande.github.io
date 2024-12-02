let currentQuestionIndex = 0;
let userAnswers = [];

const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const nextButton = document.getElementById('nextButton');
const resultsContainer = document.getElementById('results');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

function startQuiz() {
    document.getElementById('instructions').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.sentences.map(sentence => `<li>${sentence}</li>`).join('')}
        </ul>
        <div>
            ${questionData.answers.map((answer, index) => `
                <label>
                    <input type="radio" name="answer" value="${index}">
                    ${answer}
                </label><br>
            `).join('')}
        </div>
    `;
    nextButton.classList.add('hidden');
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', () => nextButton.classList.remove('hidden'));
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;

    userAnswers.push(parseInt(selectedAnswer.value));
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz').classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    let totalCorrect = 0;
    const categoryScores = {};
    const resultsHTML = userAnswers.map((answer, index) => {
        const question = questions[index];
        const isCorrect = answer === question.correct;
        totalCorrect += isCorrect ? 1 : 0;

        question.categories.forEach(category => {
            if (!categoryScores[category]) categoryScores[category] = { correct: 0, total: 0 };
            categoryScores[category].total++;
            if (isCorrect) categoryScores[category].correct++;
        });

        return `
            <div>
                <h4>${question.question}</h4>
                <ul>
                    ${question.sentences.map(sentence => `<li>${sentence}</li>`).join('')}
                </ul>
                <p>Your answer: ${question.answers[answer]}</p>
                <p>Correct answer: ${question.answers[question.correct]}</p>
                <p>Categories: ${question.categories.join(', ')}</p>
                <p>Source: ${question.source}</p>
                <p>Result: ${isCorrect ? '✅ Correct' : '❌ Incorrect'}</p>
            </div>
            <hr>
        `;
    }).join('');

    const categoryResults = Object.entries(categoryScores).map(([category, scores]) => `
        <p>${category}: ${(scores.correct / scores.total * 100).toFixed(2)}%</p>
    `).join('');

    resultsContainer.innerHTML = `
        <h2>Results</h2>
        <p>Total Score: ${(totalCorrect / questions.length * 100).toFixed(2)}%</p>
        <h3>Category Scores</h3>
        ${categoryResults}
        <h3>Detailed Results</h3>
        ${resultsHTML}
    `;
}
