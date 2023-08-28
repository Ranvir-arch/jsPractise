// Maps are iterable
// Stores data in order fashion
// Stores keynvalue pairs
// Duplicate keys are not allowed

// Objects can have only String or symbol as a key whereas map can have anything as keys example Arrays, String, Number etc.

// const map = new Map([['Name','Aman'],['Age', 12], [1, "One"]]);

const mp = new Map();

mp.set("Name","Aman");
mp.set("Age",12);
mp.set(1,"One");

// console.log(mp);

// console.log(mp.get(1));

// const k = mp.keys();

// console.log(typeof(k),k);

mp.set([1,2,3,4], "One2Four");

// for(let key of mp.keys()){
//     console.log(mp.get(key));
// }


// console.log(mp.get([1,2,3,4]));

for(let pair of mp){
    // console.log(Array.isArray(pair), pair);
}

for(let [key, value] of mp){
    // console.log(key, value);
}

//cloning an object using Object.assign()
const obj = {1 : "one"};
const obj1 = Object.assign({},obj);

console.log(obj1);