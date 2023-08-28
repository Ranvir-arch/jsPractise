class CreateUser{
    constructor(fName, sName, age, city){
        this.fName = fName;
        this.sName = sName;
        this.age = age;
        this.city = city;
    }
    static info(){
        console.log("It is a user class");
    }
    about(){
        console.log(`${this.fName} ${this.sName} is ${this.age} years old and lives in ${this.city}`)
    }
}

const user1 = new CreateUser("Ranvir", "Yadav", 21, "Kolkata");
user1.about();
// To call a static method we do not need a object, it can be called directly using class name. If we try to call it with an object then we will get an erroe
CreateUser.info();