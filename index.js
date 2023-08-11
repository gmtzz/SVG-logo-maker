const fs =require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {Square,Circle,Triangle}=require("./lib/shapes")
const SVG =require("./lib/svg")

function createMyShape(fileName, decision){
    fs.writeFileSync(fileName,decision,(err)=>{
        err? console.log(err):console.log("Your logo has been generated")
    })
}

function makeAShape(){
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
            type:"list",
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
    .then((decision)=>{
        let myShapesLogo
        switch (decision.logoShape) {
            case "triangle":
                myShapesLogo=new Triangle()
                
                break;
                case "circle":
                    myShapesLogo=new Circle()
                    break;
                    case "square":
                    myShapesLogo= new Square()

        
            
                break;
        }
        myShapesLogo.setcolor(decision.textColor)
        const myNewLogo = new SVG()
        myNewLogo.setShape (myShapesLogo)
        myNewLogo.setText (decision.text, decision.textColor)
        if (decision.text.length>3){
            console.log("Too many characters")
            makeAShape()
        }
        createMyShape("logo.svg", myNewLogo.render())
    })
}
makeAShape()
