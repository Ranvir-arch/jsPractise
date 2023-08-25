// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let count = -1;
var createCounter = function(n) {
    return function() {
        count++;
        return n+count;
    };
};
const counter = createCounter(-2);
for(let i = 0; i<5; i++){
    console.log(counter());
}