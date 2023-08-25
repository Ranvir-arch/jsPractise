const num = [3,8,9,1200,0,1,6,3,4,5,9,3000];
// num.sort();
// The above line will consider each element as string and sort the entire array according to its ASCII values, hence its not a good way to sort a number array, but it works well with string or character arrays.
// 65 -> ASCII of A
// 97 -> ASCII of a
const names = ["Heera", "Mohit", "Vishaka", "Varun", "Rohit", "Raj", "Munna"];
names.sort();
// console.log(names);

num.sort((a,b)=>a-b); // ascending order
num.sort((a,b)=>b-a); // decending order


// In the above line if a-b is positive then a abd b will be swapped else it will be as it is 
// console.log(num);

const product = [
    {id : 1, name : "Mobile", price : 16000},
    {id : 2, name : "Laptop", price : 68000},
    {id : 3, name : "Charger", price : 1500},
    {id : 4, name : "Head phone", price : 2500},
    {id : 5, name : "Mobile cover", price : 800},
    {id : 6, name : "USB", price : 1200}
];

product.sort((a,b)=>{
    return a.price - b.price;
});

console.log(product);