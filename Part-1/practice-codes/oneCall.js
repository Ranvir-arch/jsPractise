var once = function(fn) {
    return function(...args){
        do{
            console.log("hit");
            return fn(args[0]);
        }while(false)
        return undefined;
    }
};

const fun = once((a,b,c)=>a+b+c);
console.log(fun([[1,2,3],[2,3,6]]));

console.log()