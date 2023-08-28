const user = {
    name : "Ranvir",
    age : 21,
    address : {houseNumber : 1234}
};

console.log(user.address?.houseNumber);

// ? mark first check if the object exists (if the value is not null or undefined), if object exist it will return the varue of required property else it will return undefined.