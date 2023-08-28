
// function about(obj){
//     console.log(`${obj.fName} ${obj.sName} is ${obj.age} years old and lives in ${obj.city}`);
// }

// To avoid making differnt copies of same method for different objects we can create an object and store all the required methods in it and we can store the reference of each methods in the function that is being used to create the object.

const userMethods = {
    about : function(){
                console.log(`${this.fName} ${this.sName} is ${this.age} years old and lives in ${this.city}`);
            },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(fName, sName, age, city){
    const user = {};
    user.fName = fName;
    user.sName = sName;
    user.age = age;
    user.city = city;
    // user.about = function(){
    //     console.log(`${this.fName} ${this.sName} is ${this.age} years old and lives in ${this.city}`);
    // }
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const mohan = createUser("Mohan", "tripathi", 42, "Indore");
mohan.about(mohan);
const hemant = createUser("Hemant", "panth", 29, "Banglore");
hemant.about(hemant);