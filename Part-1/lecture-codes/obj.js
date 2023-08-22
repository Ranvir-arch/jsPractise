// objects are reference type.
// objects store elements in key value pair.

const student = {
    name : "Vishaka",
    age : 21,
    hobbies : ["Reading", "Coding", "Travelling"],
    grades : {
        java : "A+",
        javascript : "A",
        dbms : "B"
    }
};

console.log(typeof student, student);
console.log(typeof student.name, student.name, typeof student.age, student.age, typeof student.hobbies, student.hobbies, typeof student.grades, student.grades.java);
console.log(student["name"]);

student.gender = "female";
console.log(student);

// Difference between . notation and [] notation while accessing object.

// if we want to add a key with more than one word and spaces between them then we have to use bracket notation, whereas period notation will not work here.

// if we want to add a key which is inside a variable then we have to use [] notation.


// Itraring an object

// for in loop;

for(let key in student) console.log(key, student[key]); // here we cannot use period notation

//Object.keys

let keyArr =Object.keys(student); // Object.keys return array of keys of the object
console.log(Array.isArray(keyArr));

for(let key of keyArr) console.log(key, student[key]);

// COMPUTED PROPERTIES

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "objValue1";
const value2 = "objValue2";

const myObj1 = {};
myObj1[key1] = value1;
myObj1[key2] = value2;

console.log(myObj1);

const myObj2 = {
    [key1] : value1, // computed property
    [key2] : value2
};
console.log(myObj2);