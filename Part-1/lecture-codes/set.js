// Set data structure (It is iterable)
// It is used to store data
// Has its own methods
// No index based access
// Order of insertion is not maintained
// duplicates items are not allowed

// declaration

// const mySet = new Set([1,2,3,3,4,5,6,6,4,5,66,6,66,66]); 
// we can use any iterable to create an set

const mySet1 = new Set(); 

mySet1.add(1);
mySet1.add(3);
mySet1.add(4);
mySet1.add(2);
mySet1.add(1);
mySet1.add("item");
mySet1.add(["item","item1"]);
mySet1.add(["item","item1"]);
mySet1.add("item");

console.log(mySet1.has(1));

for(num of mySet1) console.log(num);
