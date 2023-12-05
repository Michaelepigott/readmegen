//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//Create an array of questions for user input
const questions = [
    {type: 'input',
     name: 'title',
     message: 'what is the file name'},

    {type: 'input',
     name: 'description',
     message: 'Describe the program'},
    
    {type: 'input',
     name: 'instinstructions',
     message: 'how do you install the program'},

    {type: 'input',
     name: 'useinstructions',
     message: 'how is the program used'},

    {type: 'input',
     name: 'continstructions',
     message: 'how to contribute'},

    {type: 'input',
     name: 'testinstructions',
     message: 'how to test'},

     
    {type: 'input',
     name: 'testinstructions',
     message: 'how to test'},

    
    {type: 'rawlist',
     name: 'license',
     message: 'choose your license',
     choices: ['Apache 2.0', 'MIT', 'GNU GPL v3', 'none']},

    {type: 'input',
     name: 'username',
     message: 'Enter Your Github Username'},

    {type: 'input',
     name: 'email',
     message: 'enter your contact email'},
];


// Create create the file
function writeToFile(fileName, data) {
    // Set content of document
    const mdContent = generateMarkdown(data);
    // Write document
    fs.writeFile(fileName +'.md', mdContent, (err) =>
   err ? console.log(err) :  console.log('Successfully created ' + fileName + '.md')
   )
}

// Call all functions
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        //pass answers to the document
     writeToFile(answers.title,answers);
    })
}

// Function call
init();
