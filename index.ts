#! /usr/bin/env node
import inquirer from "inquirer";

//printing a welcome message
console.log("\n\tWellcome To \'FizraFaheem\' -CLI Simple Calculator\n");

// Asking Question from user through inquirer

let answer =await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
   {message: "Enter Second Number", type: "number", name: "SecondNumber"},
{
    message: "Select one Operator to perform Operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Devision"]},
])
console.log(answer);
// condition statement if/else

if(answer.operator === "Addition"){
console.log(answer.firstNumber + answer.SecondNumber)

}
else if( answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.SecondNumber)
    
}
else if(answer.operator === "Multiplication")
{
    console.log(answer.firstNumber * answer.SecondNumber)

}
else if (answer.operator === "Devision"){
    console.log(answer.firstNumber / answer.SecondNumber)

}