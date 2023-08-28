// functions in java script are objects.
// There are various properties of function as in objects, name is one such property that returns name of the function.
function hello(){
    console.log("Hello, World!");
}
console.log(hello.name);

// You can add your own properties.

hello.myProperty = "new property";
console.log(hello.myProperty);

// Only functions provide prototype property.

const hi={hey: "hi"};

console.log(hello.prototype);
console.log(hi.prototype);

// prototype can used to hold key - value pairs.

hello.prototype.a = "a";
console.log(hello.prototype);