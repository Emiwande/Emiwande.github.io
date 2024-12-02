const questions = [
    {
        question: "What's the difference between these sentences?",
        sentences: [
            "Neither of the books is interesting.",
            "Neither of the books are interesting."
        ],
        answers: [
            "The first is more formal.",
            "The second is more formal.",
            "There's no difference.",
            "The first is incorrect.",
            "The second is incorrect."
        ],
        correct: 0,
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
            "The first is more formal.",
            "The second is more formal.",
            "There's no difference.",
            "The first is incorrect.",
            "The second is incorrect."
        ],
        correct: 3,
        categories: ["tenses"],
        source: ""
    },
];

// Neither of the books is interesting.
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
// My world has always been cold, dark, silent.
// true,
// Was late.
// false,
// It was late.
// true,
// It was a mere suggestion.
// true,
// Neither of the books are interesting.
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
// It rained all day, which ruined our plans.
// true,
// The teacher demanded that we be quiet.
// true,
// It rained all day, what ruined our plans.
// false,
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
// I doubt.
// false,
// I doubt it.
// true,
// I'd rather to eat out.
// false,
// I'd rather eat out.
// true,
// I'm next, aren't I?
// true,
// None of the answers is correct.
// true,
// None of the answers are correct.
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