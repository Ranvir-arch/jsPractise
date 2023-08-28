// call apply bind
function about(hobby){
    console.log(this.name, hobby);
}
const user1 = {
    name : "Amar",
    age : 9,
    info : function(hobby){
        console.log(this.name, this.age, hobby);
    }
}

const user2 = {
    name : "Amar",
    age : 9
}
// By using call method we can pass the value of this as aargument, if we dont pass any value, it will return undefined.
// user1.info.call(user2,"Guitar");

// we can do the above call using apply, just we need to pass the arguments as an array.

// user1.info.apply(user1, ["Guitar"]);

// Using bind we can bind an function with any object, it will return an function that can be used to call it.

// const func = about.bind(user1, "Guitar");

// func();

// arrow function doesnt has this, it gets its this value from sorrunding i,e. one level up from the object. We cannot change the value of this of an arrow function. call(), bind(), apply() will not work here to change the this value.


const obj = {
    name : "name",
    another : {
        name : "Name",
        info : function(){
            console.log(this.name);
            console.log(this);
        },
        about(){                                 // short syntax to create a method
            console.log(this.name);
            console.log(this);
        }
    }
}

obj.another.info();
obj.another.about();

// Kodathi@23 -> password