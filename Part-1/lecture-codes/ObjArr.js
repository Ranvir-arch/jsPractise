const arr = [{
    name : "Amar",
    roll : 1,
    gender : "Male"
},{
    name : "Amrita",
    roll : 2,
    gender : "Female"
},{
    name : "Akbar",
    roll : 3,
    gender : "Male"
},{
    name : "Shrusti",
    roll : 4,
    gender : "Female"
}];

console.log(arr);

for(student of arr) console.log(student.name, student.gender);

// Nested de-structuring
let [{name : na},,{gender},{roll}] = arr;

console.log();
console.log();
console.log(na, gender, roll);