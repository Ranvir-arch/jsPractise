let str = "Hiroshima";
const chr = [...str];
console.log(str, chr);

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key1 : "uniqueValue",
    key3 : "value3",
    key4 : "value4"
};

const myObj = {...obj1, ...obj2};
console.log(myObj);

const aObj = {...str};
console.log(aObj);