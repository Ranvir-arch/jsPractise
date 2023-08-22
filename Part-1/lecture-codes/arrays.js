// arrays are of reference type
let fruits = ["Apple", "Banana", "Grapes"];
fruits[3] = "Pear";
console.log(typeof fruits, fruits);
let emp = []
console.log(typeof emp, emp);
let randoms = [1, "Amar", 2.0, "Akbar", 3.333, ["Anthony", 420] ];
console.log(randoms);
console.log(randoms[5][0]);
let obj = {};
let n =1;
// to check if the variable is a array
console.log(Array.isArray(randoms));
console.log(Array.isArray(obj));
console.log(Array.isArray(n));

// array push pop

//push --> it is used to push an element at the end of an array.
fruits.push("Pomegranate");
console.log(fruits);

//pop --> it is used to pop the last element from array;
let removed = fruits.pop();
console.log(fruits);
console.log(removed);


// array shift unshift

// unshift --> it is used to add an element at the begening of the array.
fruits.unshift("Coconut", "Dates");
console.log(fruits);

//shift --> it is used to remove first element from the array
let shifted = fruits.shift();
console.log(fruits);
console.log(shifted);
