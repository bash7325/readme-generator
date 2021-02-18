//require fs module
const fs = require('fs')
//require inquirer module
const inquirer = require('inquirer')
//utility module
const util = require('util');
//generator module
const generateMarkdown = require('./utils/generateMarkdown');
//user inputs
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your projects description',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter your projects deployed link',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter license type',
        choices: ["MIT", "Apache", "Eclipse", "Mozilla", "Unlicense"],
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email for questions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github profile address',
    },
    

]).then((data) => {
        console.log(data)
        console.log("Created README.md")
        const newReadMe = generateMarkdown(data);
        fs.writeFileSync("README.md", newReadMe);
        
    });