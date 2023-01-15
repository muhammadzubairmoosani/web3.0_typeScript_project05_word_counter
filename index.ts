import inquirer from "inquirer";

const answers: { sentence: string } = await inquirer.prompt([
  {
    type: "input",
    name: "sentence",
    message: "Enter your sentence to count the word: ",
  },
]);
const { sentence } = answers;

if (sentence) {
  console.log(
    `Your sentence word count is: ${sentence.trim().split(" ").length}`
  );
}
