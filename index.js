//require fs module
const fs = require('fs')
//require inquirer module
const inquirer = require('inquirer')
//utility module
const util = require('util');
//generator module
const generateMarkdown = require('./node_modules/inquirer/lib/utils/generateMarkdown');
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

]).then((data) => {
        console.log(data)
        const newReadMe = generateMarkdown(data);
        fs.writeFileSync("README.md", newReadMe);
        
    });