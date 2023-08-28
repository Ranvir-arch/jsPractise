
// Here we are using __proto__ to create an function to create objects. 

const userMethods = {
    about : function(){
                console.log(`${this.fName} ${this.sName} is ${this.age} years old and lives in ${this.city}`);
            },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(fName, sName, age, city){
    const user = Object.create(userMethods);
    user.fName = fName;
    user.sName = sName;
    user.age = age;
    user.city = city;
    return user;
}

const mohan = createUser("Mohan", "tripathi", 42, "Indore");
mohan.about(mohan);
const hemant = createUser("Hemant", "panth", 29, "Banglore");
hemant.about(hemant);