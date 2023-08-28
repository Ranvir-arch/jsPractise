const obj1 = {
    key1 : "Value1",
    key2 : "Value2"
};

// By using Object.create() we can create an empty object with __proto__ of another object. In the below if we are trying to access a key which is not present in obj2 then thw key will be searched in obj1, because __proto__ is storing the address of obj1 and if its still not fined in obj1 then it will retuen undefined. 

const obj2 = Object.create(obj1);

console.log(obj2.key1);
console.log(obj2.__proto__);
// console.log(obj1.__proto__);

// __proto__ , [[prototype]] are same things, whereas prototype is different.