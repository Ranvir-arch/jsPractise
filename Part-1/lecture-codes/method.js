
// methods are functions inside a object
// this refers to current object
const person = {
    name : "Ranvir",
    age : 12,
    info : function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    },
    Age : function(){
        return person.age;
    }
};

// person.info();
// console.log(person.Age());

function stdInfo(){
    console.log(`Name -> ${this.name} and roll -> ${this.roll}`);
}

const student1 ={
    name : "Vishal",
    roll : 1,
    info : stdInfo
}
 
const student2 ={
    name : "Shital",
    roll : 2,
    info : stdInfo
}
 
const student3 ={
    name : "Punit",
    roll : 3,
    info : stdInfo
}
 
const student4 ={
    name : "vishakha",
    roll : 4,
    info : stdInfo
}

student1.info();
student2.info();
student3.info();
student4.info();

// console.log(this);

// If we are using strict mode then we need to write window.function_name to call a function 


