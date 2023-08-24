function one(){
    const a = "value1";
    function two(){
        const a = "value2";
        console.log("Inside two", a);
    }
    const three = ()=>{
        console.log("Inside three");
    }

    console.log("Inside one");
    two();
    three();
    // console.log(b); 
    //In the above line we cannot access the value of b because it is outside the scope of the variable b.
}

one();
console.log("Hello world !");
// console.log(a);


//let and const are block scope : this means we cannot access them outside a blaock

//var is function scope : this means we can access them outside a block but not outside of a function

function f(){
    var v = "first variable";
    function f1(){
        var v = "second variable";
        console.log(v);
    }
    console.log("Main gate");
    console.log(v);
    f1()
}
f();


{
    var a1 = 2;
    const a2 = 3;
    let a3 = 4;
}
console.log(a1);
// console.log(a2);
// console.log(a3);