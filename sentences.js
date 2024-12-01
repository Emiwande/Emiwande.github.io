const sentences = [
  {
    text: "Neither of the books is interesting.",
    correct: true,
    tags: ["formal"],
    categories: [],
    source: ""
  },
  {
    text: "Do you can juggle?",
    correct: false,
    tags: [],
    categories: ["modals"],
    source: ""
  },
  {
    text: "I visited the Pentagon.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I visited Pentagon.",
    correct: false,
    tags: [],
    categories: ["articles"],
    source: ""
  },
  {
    text: "My world has always been cold, dark, silent.",
    correct: true,
    tags: ["literary"],
    categories: [],
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
    text: "Neither of the books are interesting.",
    correct: true,
    tags: ["informal"],
    categories: [],
    source: ""
  },
  {
    text: "It's time to make a decision",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "It's time for you to make a decision",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "It's time you made a decision.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "It's time you make a decision.",
    correct: false,
    tags: [],
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
    text: "Can you juggle?",
    correct: true,
    tags: [],
    categories: [],
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
    text: "They could escape from prison yesterday.",
    correct: false,
    tags: [],
    categories: ["modals"],
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
    text: "I don't need no help.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I don't need any help.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I don't need some help.",
    correct: false,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "I need no help.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Did you went to the party?",
    correct: false,
    tags: [],
    categories: ["tenses"],
    source: ""
  },
  {
    text: "Did you go to the party?",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "My parents let me to stay up late",
    correct: false,
    tags: [],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "My parents let me stay up late",
    correct: true,
    tags: [],
    categories: ["verbs"],
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
    tags: ["British"],
    categories: [],
    source: ""
  },
  {
    text: "We hike on the weekends.",
    correct: true,
    tags: ["American"],
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
    text: "Look at her dancing.",
    correct: true,
    tags: [],
    categories: [],
    source: ""
  },
  {
    text: "Look at her dance.",
    correct: true,
    tags: ["American"],
    categories: ["verbs"],
    source: ""
  },
  {
    text: "I don't hope so.",
    correct: false,
    tags: [],
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
    tags: ["American", "informal"],
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
