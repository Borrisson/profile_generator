const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const allQuestions = ["What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let output = '';
rl.question(allQuestions[0], (answer) => {
  rl.question(allQuestions[1], (answer) => {
    rl.question(allQuestions[2], (answer) => {
      rl.question(allQuestions[3], (answer) => {
        rl.question(allQuestions[4], (answer) => {
          rl.question(allQuestions[5], (answer) => {
            rl.question(allQuestions[6], (answer) => {
              output = output + `Super Power: ${answer}\n`;
              console.log(output);
              rl.close();
            });

            output = output + `Favourite Sports: ${answer}\n`;
          });

          output = output + `Favourite Meal: ${answer}\n`;
        });

        output = output + `Favourite Time to Eat: ${answer}\n`;
      });

      output = output + `Favourite Music: ${answer}\n`;
    });

    output = output + `Favourite Activity: ${answer}\n`;
  });

  output = output + `Name: ${answer}\n`;
});