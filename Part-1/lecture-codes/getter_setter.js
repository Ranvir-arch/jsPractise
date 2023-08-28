class Person{
    constructor(fName, sName, age){
        this.fName = fName;
        this.sName = sName;
        this.age = age;
    }
    get fullName(){
        return `${this.fName} ${this.sName}`;
    }
    set fullName(fullName){
        const [fName, sName] = fullName.split(" ");
        this.fName = fName;
        this.sName = sName;
    }
}

const per = new Person("Ranvir", "Yadav", 21);
console.log(per.fullName);
per.fullName = "Sivam Sharma";
console.log(per.fullName);