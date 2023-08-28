// the below function is called cunstructor function
function CreateUser(fName, sName, age, city){
    this.fName = fName;
    this.sName = sName;
    this.age = age;
    this.city = city;
} 
CreateUser.prototype.about = function(){console.log(`${this.fName} ${this.sName} is ${this.age} years old and lives in ${this.city}`);}
CreateUser.prototype.is18 = function(){return this.age>=18}
CreateUser.prototype.sing = ()=>{console.log("lalalallala")};

const mohan = new CreateUser("Mohan", "tripathi", 42, "Indore");
mohan.about();
const hemant = new CreateUser("Hemant", "panth", 29, "Banglore");
hemant.about();
mohan.sing();

// new keyword
// 1. first creates an empty object.    
// 2. initialise and return object.

// new keyword performs the task of Object.create itself where __proto__ is prototype of the function that is used to creat the object.

for(let key in mohan){
    if(mohan.hasOwnProperty(key))
        console.log(key);
}