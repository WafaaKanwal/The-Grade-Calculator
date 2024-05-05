#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.greenBright.bold("\t\t     <<<<<===========================>>>>>")
);
console.log(chalk.greenBright.bold("\t\t\tWelcome to the Grade Calculator "));
console.log(
  chalk.greenBright.bold("\t\t     <<<<<===========================>>>>>\n")
);

inquirer
  .prompt([
    {
      type: "input",
      name: "obtainedMarks",
      message: chalk.yellowBright("Please enter the marks you scored:"),
      validate: (input) =>
        !isNaN(parseFloat(input)) && isFinite(input)
          ? true
          : "Please enter a valid number.",
    },
    {
      type: "input",
      name: "maxMarks",
      message: chalk.yellowBright("Please enter the total possible marks:"),
      validate: (input) =>
        !isNaN(parseFloat(input)) && isFinite(input)
          ? true
          : "Please enter a valid number.",
    },
  ])
  .then((answers) => {
    const obtainedMarks = +answers.obtainedMarks;
    const maxMarks = +answers.maxMarks;

    const percentage = (obtainedMarks / maxMarks) * 100;
    console.log(
      chalk.magentaBright(
        `\n\t\t\tYour calculated percentage: ${percentage.toFixed(2)}%`
      )
    );

    let gradeDescription;
    if (percentage >= 90 && percentage <= 100) {
      gradeDescription = chalk.blueBright.bold(
        "\t\t\t Excellent! You've achieved Grade A1."
      );
    } else if (percentage >= 80) {
      gradeDescription = chalk.blueBright.bold(
        "\t\t\tWell done! Your Grade is A+."
      );
    } else if (percentage >= 70) {
      gradeDescription = chalk.blueBright.bold(
        "\t\t\tGood job! Your Grade is A."
      );
    } else if (percentage >= 60) {
      gradeDescription = chalk.blueBright.bold(
        "\t\t\tNicely done! Your Grade is B."
      );
    } else if (percentage >= 50) {
      gradeDescription = chalk.blueBright.bold(
        "\t\t\tYou've passed with Grade C."
      );
    } else if (percentage >= 40) {
      gradeDescription = chalk.blueBright.bold("\t\t\tYou've passed.");
    } else {
      gradeDescription = chalk.redBright.bold(
        "\t\t\tUnfortunately, you did not pass."
      );
    }

    console.log(gradeDescription);
  });
