let age = 18;
if(age>= 18) console.log("Eligible to play");
else console.log("Not eligible to play");

let parameter = 201;
if(parameter <=12) console.log("Better");
else if(parameter >12 && parameter <=22) console.log("Good");
else console.log("Best");

let value = 121;
if(value % 2 ===0) console.log("the number is even");
else console.log("The number is odd");

// ternary operator

let age1 = 11;
let drink = age1>10 ? "coffee" : "Milk";

console.log(drink);

const prompt = require('prompt-sync')();

let randomInput = prompt("Enter anything you wish  ");
console.log(typeof randomInput, randomInput);