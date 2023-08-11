const fs =require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {generateSVG, makeShape} = require('./lib/shapes');


inquirer
    .prompt([
        {
            type:"input",
            name:"text",
            message: "Please enter up to 3 letters for your logo text."

        },
        {
            type:"input",
            name:"textColor",
            message: "Please enter a color for your text's color."

        },
        {
            type:"input",
            name:"logoShape",
            message: "Please choose a logo shape (press enter to select).",
            choices: ['triange','circle', 'square'],

        },
        {
            type:"input",
            name:"logoColor",
            message: "Please enter a color for your logo's main color."

        }, 

    ])