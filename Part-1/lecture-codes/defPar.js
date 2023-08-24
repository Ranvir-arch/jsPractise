
// default parameter
const add  = (a=3,b=4)=> {
    return a+b;
}

console.log(add(96));

// rest parameter

function addition(...arr){
    let ans=0;
    for(i of arr) ans+=i;
    return ans;
}

console.log(addition(99,36,5,60,100,50,50));

// parameter destructuring

const person = {
    name : "Sumit",
    gender : "Male",
    age : 21
};

function details({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

details(person);

// call back function 

function called(){
    console.log("Called");
}

function calling(callback){
    console.log("calling");
    callback();
}

calling(called);

// function returning a function

function ref(){
    function hello(){
        console.log("Hello world!");
    }

    return hello;
}

ref()();