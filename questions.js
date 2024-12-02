const questions = [
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "I left the door open.",
            "I left the open door."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 1,
        categories: ["verbs"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "My world has always been cold, dark, silent.",
            "My world has always been cold, dark, and silent."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 6,
        categories: ["verbs"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "Neither of the books is interesting.",
            "Neither of the books are interesting."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 4,
        categories: ["quantifiers", "agreement"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "I took an umbrella in case it will rain.",
            "I took an umbrella in case it rains."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 3,
        categories: ["tenses"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "It was a mere suggestion.",
            "That suggestion was mere."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 3,
        categories: ["adjectives"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "I doubt.",
            "I doubt it."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 2,
        categories: ["verbs"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "None of the answers is correct.",
            "None of the answers are correct."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 4,
        categories: ["quantifiers", "agreement"],
        source: ""
    },
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "It rained all day, which ruined our plans.",
            "It rained all day, what ruined our plans."
        ],
        answers: [
            "There is no difference.",
            "There is a difference in meaning.",
            "The first is incorrect.",
            "The second is incorrect.",
            "The first is more formal.",
            "The second is more formal.",
            "The first is more literary.",
            "The second is more literary."
        ],
        correct: 3,
        categories: ["relative clauses"],
        source: ""
    },
];


// The teacher demanded that we be quiet.
// true,
// Whether I'll go to the party I don't know.
// true,
// If I'll go to the part I don't know.
// false,
// We had a conversation about whether the project was feasible.
// true,
// We had a conversation about if the project was feasible.
// false,
// Do you can juggle?
// false,
// I visited the Pentagon.
// true,
// I visited Pentagon.
// false,
// Was late.
// false,
// It was late.
// true,
// It's time to make a decision
// true,
// It's time for you to make a decision
// true,
// It's time you made a decision.
// true,
// It's time you make a decision.
// false,
// He's knowing the answer.
// false,
// He knows the answer.
// true,
// Can you juggle?
// true,
// I sneezed my nose.
// false,
// They could escape from prison yesterday.
// false,
// I sneezed.
// true,
// I don't need no help.
// false,
// I don't need any help.
// true,
// I don't need some help.
// false,
// I need no help.
// true,
// Did you went to the party?
// false,
// Did you go to the party?
// true,
// My parents let me to stay up late
// false,
// My parents let me stay up late
// true,
// We hike in the weekends.
// false,
// We hike at the weekends.
// true,
// We hike on the weekends.
// true,
// If you spot any mistakes, let me know.
// true,
// If you spot some mistakes, let me know.
// true,
// I'd rather to eat out.
// false,
// I'd rather eat out.
// true,
// I'm next, aren't I?
// true,
// I am next, am I not?
// true,
// I've lost my wallet yesterday.
// false,
// I lost my wallet yesterday.
// true,
// I took an umbrella in case it will rain.
// false,
// I took an umbrella in case it rains.
// true,
// I believe that they are the most qualified candidates.
// true,
// I believe they are the most qualified candidates.
// true,
// 'I love you,' whispered Kate.
// true,
// 'I love you,' Kate whispered.
// true,
// 'I love you,' whispered she.
// false,
// 'I love you,' she whispered.
// true,
// I believe them to be the most qualified candidates.
// true,
// I don't hope so.
// false,
// Small dogs bark the most.
// true,
// Small dogs bark most.
// true,
// You ought to apologize, oughn't you to?
// false,
// You ought to apologize, oughn't you?
// true,
// If I knew the answer, I'd tell you.
// true,
// If I were to know the answer, I'd tell you.
// false,
// Many a lies were told.
// false,
// Many a lie were told.
// false,
// Many a lies was told.
// false,
// Many a lie was told.
// true,
// I find that they passed the test surprising.
// false,
// I find it surprising that they passed the test.
// true,
// Go and get your jacket.
// true,
// Go get your jacket.
// true,
// There's no point in worrying.
// true,
// It's no point in worrying.
// false,
// There's no point worrying.
// true,
// It's no point worrying.
// false,
// There's no use in worrying.
// true,
// It's no use in worrying.
// false,
// There's no use worrying.
// true,
// It's no use worrying.
// true,
// There's no good in worrying.
// false,
// It's no good in worrying.
// false,
// There's no good worrying.
// false,
// It's no good worrying.
// true,
