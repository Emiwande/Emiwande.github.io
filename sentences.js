const sentences = [
  {
    text: "Can you speak English?",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Do you can speak English?",
    correct: false,
    tags: [],
    categories: ["modals"],
    source: ""
  },
  {
    text: "Was late.",
    correct: false,
    tags: [],
    categories: ["clause"],
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
    categories: [],
    source: ""
  },
  {
    text: "Neither of the books is interesting.",
    correct: true,
    tags: ["formal"],
    categories: [],
    source: ""
  },
  {
    text: "Neither of the books are interesting.",
    correct: true,
    tags: ["informal"],
    categories: [],
    source: ""
  },
  {
    text: "He's knowing the answer.",
    correct: false,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "He knows the answer.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "It rained all day, which ruined our plans.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "The teacher demanded that we be quiet.",
    correct: true,
    tags: ["American", "formal"],
    categories: [],
    source: ""
  },
  {
    text: "It rained all day, what ruined our plans.",
    correct: false,
    tags: [],
    categories: ["relative clauses"],
    source: ""
  },
  {
    text: "I sneezed my nose.",
    correct: false,
    tags: [],
    categories: ["verbs"],
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
    text: "I sneezed.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "We hike in the weekends.",
    correct: false,
    tags: [],
    categories: ["prepositons"],
    source: ""
  },
  {
    text: "We hike at the weekends.",
    correct: true,
    tags: ["british"],
    categories: [],
    source: ""
  },
  {
    text: "We hike on the weekends.",
    correct: true,
    tags: ["american"],
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
    categories: ["verbs"],
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
    categories: ["verbs"],
    source: ""
  },
  {
    text: "I'd rather eat out.",
    correct: true,
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
    text: "None of the answers is correct.",
    correct: true,
    tags: ["formal"],
    categories: [],
    source: ""
  },
  {
    text: "None of the answers are correct.",
    correct: true,
    tags: ["informal"],
    categories: [],
    source: ""
  },
  {
    text: "I am next, am I not?",
    correct: true,
    tags: ["formal"],
    categories: [],
    source: ""
  },
  {
    text: "I've lost my wallet yesterday.",
    correct: false,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "I lost my wallet yesterday.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I took an umbrella in case it will rain.",
    correct: false,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "I took an umbrella in case it rains.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I believe that they are the most qualified candidates.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I believe they are the most qualified candidates.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "'I love you,' whispered Kate.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "'I love you,' Kate whispered.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
    {
    text: "'I love you,' whispered she.",
    correct: false,
    tags: [],
    categories: ["clause"],
    source: ""
  },
    {
    text: "'I love you,' she whispered.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I believe them to be the most qualified candidates.",
    correct: true,
    tags: ["formal"],
    categories: [],
    source: ""
  },
  {
    text: "Small dogs bark the most.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Small dogs bark most.",
    correct: true,
    tags: ["informal"],
    categories: [],
    source: ""
  },
  {
    text: "You ought to apologize, oughn't you to?",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "You ought to apologize, oughn't you?",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "If I knew the answer, I'd tell you.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "If I were to know the answer, I'd tell you.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Many a lies were told.",
    correct: false,
    tags: [],
    categories: ["agreement"],
    source: ""
  },
  {
    text: "Many a lie were told.",
    correct: false,
    tags: [],
    categories: ["agreement"],
    source: ""
  },
  {
    text: "Many a lies was told.",
    correct: false,
    tags: [],
    categories: ["agreement"],
    source: ""
  },
  {
    text: "Many a lie was told.",
    correct: true,
    tags: ["formal"],
    categories: [],
    source: ""
  },
  {
    text: "I find that they passed the test surprising.",
    correct: false,
    tags: [],
    categories: ["clause"],
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
    categories: [],
    source: ""
  },
  {
    text: "Go get your jacket.",
    correct: true,
    tags: ["american", "informal"],
    categories: [],
    source: ""
  },
  {
    text: "There remains a sense of mystery surrounding the case.",
    correct: true,
    tags: ["formal", "literary"],
    categories: [],
    source: ""
  },
];
