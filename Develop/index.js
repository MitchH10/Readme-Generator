// TODO: Include packages needed for this application
//Import packages
//Input collection
const inquirer = require('inquirer');
//File manipulation
const fs = require('fs');
//Pull from other javascript file
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ["What is the title of you application? ", "Please enter a description: ", "Please enter installation instructions: ",
"Please enter usage information: ", "Please enter contribution guidelines: ", "Please enter test instructions: ",  
"Please enter your Github username: ", "Please enter you email address: ", "Please enter your full name: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`README-${fileName}.md`, data, (err) =>
   err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installInstruc',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'contributionGuide',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'testInstruc',
    },
    {
        type: 'list',
        message: "Please select a license",
        name: 'license',
        choices: ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "The Organization for Ethical Source",
            "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib"],
        default: "none"
    },
    {
        type: 'input',
        message: questions[6],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'email',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'name',
    },
  ])
  .then((response) => {
    //use gathered inputs to call generateMarkdown fuction in other js file
    writeToFile(response.title, generateMarkdown.generateMarkdown(response));
});
}

// Function call to initialize app
init();





//List of licenses
// Apache
// Boost
// BSD
// Creative Commons
// Eclipse
// GNU
// The Organization for Ethical Source
// IBM
// ISC
// MIT
// Mozilla
// Open Data Commons
// Perl
// SIL
// Unlicense
// WTFPL
// Zlib