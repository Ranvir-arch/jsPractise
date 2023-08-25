// Important Array methods

// forEach

const arr = [4,5,6,4,5,6,5,6];

function doStuff(num){
    // console.log("The index is ", index);
    console.log(num*2);
}

// for(let i in arr) doStuff(arr[i], i); 
//the above lines action can be done using forEach method

arr.forEach(doStuff);

const users = [
    {name : "Amar", age: 20},
    {name : "Akbar", age: 22},
    {name : "Anthony", age: 23},
    {name : "Amrita", age: 21}
];

users.forEach((user)=>{
    console.log(user.name);
});

// map method

const newArr = arr.map((num, i)=>{
    console.log(i);
    return num**2;
});
console.log(arr, newArr);


// filter method

const newArr2 = arr.filter(num=>num%2===0);

console.log(newArr2);

// reduce method

let sum = arr.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
})

console.log(sum);


const cart = [
    {id : 1, name : "Mobile", price : 16000},
    {id : 2, name : "Laptop", price : 68000},
    {id : 3, name : "Charger", price : 1500},
    {id : 4, name : "Head phone", price : 2500},
    {id : 5, name : "Mobile cover", price : 800},
    {id : 6, name : "USB", price : 1200}
];

let checkout = cart.reduce((acc, curr)=>{
    return acc + curr.price;
},0);

console.log(checkout);