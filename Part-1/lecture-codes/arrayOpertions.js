let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6,7,8,9,10];

// clone an array
let arr3 = arr1.slice(0);
let arr4 = [].concat(arr1);
let arr6 = [...arr1]; // ... is a spread operator.
//concat an array
let arr5 = arr1.concat(arr2);
let arr7 = [].concat(arr1,arr2);
console.log(arr7);


let arr8 = [1,2,3,4,5,6,7];
console.log(arr8);

// for loop on array.

const arr10 = ["jklm", "dot", "fun"];

// for(let i =0; i< arr8.length; i++) console.log(arr8[i]);

// for(let j of arr8) console.log(j); //for of loop

for(let index in arr10) console.log(index, arr10[index].toUpperCase());

// destructuring an array.

const leaders = ["Modi", "Biden", "Putin"];
let[India, Usa, Russia] = leaders;
console.log(India, Usa, Russia);
console.log(leaders);

// you can skip a index by using ','

let[Ind, ...rest] = leaders;
console.log(rest);