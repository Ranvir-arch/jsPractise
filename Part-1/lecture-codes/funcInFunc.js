function one(){
    const two = function(){
        console.log("inside two");
    };
    const three = (a,b)=>{
        return a+b;
    };
    console.log("inside one : ");
    two();
    console.log(three(2,3));

}

one();

// console.log(three(2,5));