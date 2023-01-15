import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the word: ",
    },
]);
const { sentence } = answers;
if (sentence) {
    console.log(`Your word count is: ${sentence.trim().split(" ").length}`);
}
