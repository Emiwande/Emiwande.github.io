const sentences = [
  {
    text: "Can you speak English?",
    correct: true,
    tags: [],
    categories: ["modals"],
    source: ""
  },
  {
    text: "Do you can speak English?",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Was late.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "It was late.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "It was a mere suggestion.",
    correct: true,
    tags: [],
    categories: ["adjectives"],
    source: ""
  },
  {
    text: "That suggestion was mere.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "He's knowing the answer.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "He knows the answer.",
    correct: true,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "I sneezed my nose.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I sneezed.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "If you spot any mistakes, let me know.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "If you spot some mistakes, let me know.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I doubt.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I doubt it.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I'd rather to eat out.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I'd rather eat out.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I'm next, aren't I?",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I am next, am I not?",
    correct: true,
    tags: [],
    categories: ["formal"],
    source: ""
  },
  {
    text: "I've lost my wallet yesterday.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I lost my wallet yesterday.",
    correct: true,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "I took an umbrella in case it will rain.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I took an umbrella in case it rains.",
    correct: true,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "I believe that they are the most qualified candidates.",
    correct: true,
    tags: [],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "I believe they are the most qualified candidates.",
    correct: true,
    tags: [],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "I believe them to be the most qualified candidates.",
    correct: true,
    tags: ["formal"],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "Many a lies were told.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Many a lie were told.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Many a lies was told.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Many a lie was told.",
    correct: true,
    tags: ["formal"],
    categories: ["subject-verb agreement"],
    source: ""
  },
  {
    text: "I find that they passed the test surprising.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I find it surprising that they passed the test.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Go and get your jacket.",
    correct: true,
    tags: [],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "Go get your jacket.",
    correct: true,
    tags: ["american", "informal"],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "There remains a sense of mystery surrounding the case.",
    correct: true,
    tags: ["formal", "literary"],
    categories: ["clause"],
    source: ""
  },
];
