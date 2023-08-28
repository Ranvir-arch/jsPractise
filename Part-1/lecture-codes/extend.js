class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal{
constructor(name, age, speed){
    super(name, age);
    this.speed = speed;
}
run(){
    console.log(`${this.name} is running at ${this.speed} kmph.`)
}
}

const tommy = new Dog("tommy",2, 45);
tommy.run();
console.log(tommy.speed);