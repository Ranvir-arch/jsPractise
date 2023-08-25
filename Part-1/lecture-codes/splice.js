// start, delete, insert

const arr = ["item1", "item2", "item3", "item4"];

// delete

arr.splice(1,1); // it also returns array of deleted item

// insert

arr.splice(1,0,"item2");

// delete and insert

arr.splice(1,2,"i1","i2");

console.log(arr);



// Random note : array and string are iterables as we can use for of loop on it.

// Array like object : oblect with length property and can be accessed using indexs example string.