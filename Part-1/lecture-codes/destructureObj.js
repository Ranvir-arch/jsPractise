const vehicle = {
    type : "Car",
    brand : "ferrari",
    wheels : 4,
    model : "Ferrari Dino 246 GT",
    price : "$394558"
}

const keys = Object.keys(vehicle);
console.log(keys);

let {type,brand : company,wheels,...rest} = vehicle;

console.log(type,company,wheels, rest);