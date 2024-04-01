#!/usr/bin/env node
import inquirer from "inquirer"
// computer will generate a number
// user input for guessing number
//compare user input and computer generated number and show result
const randomNumber= Math.floor(Math.random()*6)
const answers= await inquirer.prompt(
    [
 {
   name:"num1" ,
   type:"number"   ,
   message:"Guess a number betweeen 1 to 6" 
}
]
);
if(answers.num1===randomNumber){
    console.log("congratulation you guess a right number")
}
else{
    console.log("Unfortunately! you guess a wrong number")
}