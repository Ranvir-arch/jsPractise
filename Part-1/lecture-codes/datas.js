// Data Primitive types in java script :
//1. String
//2. Number
//3. Booleans
//4. Undefined
//5. Null
//6. BigInt
//7. Symbol

// typeof operator : It is used to find the data type of a variable.

let jklm = 1234;
console.log(typeof jklm);
let fun = "funny";
console.log(typeof fun);
let really = true;
console.log(typeof really);
let m = fun[7];
console.log(typeof m);
console.log(typeof 123.456);

// Convert a number to String.

let num = 12345;
console.log(typeof num);
num += "";
console.log(typeof num);

// Convert a String to Number.

let str = "54321";
console.log(typeof str);
str = +str;
console.log(typeof str);


// Another way of the above type conversion is.

let sen = "1234";
let numb = 1234;

sen = Number(sen);
console.log(typeof sen);

numb = String(numb);
console.log(typeof numb);

// If we declare a variable and dont initialize it then the type of the variable will be undefined.
// If we are declaring a variable using const keyword then its compulsury to initialise it.

// About BigInt : 
let n = BigInt(12345678909876543433333333333333333333567);
console.log(n);
// We can not perform any operation between BigInt and number, both of them must be either BigInt or Number.
 console.log(Number.MAX_SAFE_INTEGER);
 console.log(Number.MAX_VALUE);
