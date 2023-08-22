let firstName = "Ranvir";
console.log(firstName[0]);
console.log(firstName[3]);
console.log(firstName[9]);

//length of a string.

let length = firstName.length;
console.log(length);

//trim() : It returns a string after removing all the white spaces before and after the string.

let lastName = "   Yadav   ";
console.log(lastName);
lastName = lastName.trim();
console.log(lastName);

//toUpperCase()
let str = firstName.toUpperCase();
console.log(str);
//toLowerCase()
console.log(str.toLowerCase());
//slice
console.log(firstName.slice(1,5));
console.log(firstName.slice(1));
