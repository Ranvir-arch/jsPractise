class CreateUser{
    constructor(fName, sName, age, city){
        this.fName = fName;
        this.sName = sName;
        this.age = age;
        this.city = city;
    }
    about(){
        console.log(`${this.fName} ${this.sName} is ${this.age} years old and lives in ${this.city}`)
    }
}

const user1 = new CreateUser("Ranvir", "Yadav", 21, "Kolkata");
user1.about();