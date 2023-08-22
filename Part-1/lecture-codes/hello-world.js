// use strict will not let us describe a variable without let or var keyword, and also helps in preventing mistakes.
"use strict";
// This is the most basic program of javaScript.
console.log("Hello World!");

// in this variables concept is also covered.
// java script is a loosly typed language since we do not need to mention data type explicitly.
let val =2;
console.log(val);
// we can chamge value of a variable, the changed value can even be of different data type.
val = "Java-script";
console.log(val);

// A variable name cannot be started with a number.
// Only special characters that are allowed are underscore (_) and dollar ($).
// Spaces cannot be used in variable names.

// convention is to start a variable name with lowercase and follow cammelcase convention.

var num = 4;
console.log(num**0.5);

// Differnce between var and let keyword : If var is used to declare a variable then we can redeclare this variable using var keyword, but in th ecase of let keyword we cannot redeclare the already declared variable using let keyword (More about it Later...) .