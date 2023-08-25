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