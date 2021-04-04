// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What provide a description of your project"
    },
    {
        type: "input",
        name: "link",
        message: "Provide a link to the repo or deployed site"
    },
    {
        type: "input",
        name: "installation",
        message: "What provide installation instructions for your project"
    },
    {
        type: "input",
        name: "usage",
        message: "What are some usage examples for this project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "license",
        message: "What license is associated with this project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => writeToFile('README.md', generate(answers)))
    .then(() => console.log('Successfully wrote to README'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
