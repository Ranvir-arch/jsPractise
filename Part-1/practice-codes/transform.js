var map = function(arr, fn) {
    for(i in arr) arr[i] = fn(arr[i], i);
    return arr;
};

function plusI(n, i) {
    console.log(typeof(n),typeof(i));
}

// map([1,2,3], plusI);

// const arr = [1,2,3,4,5,6];
// const type = arr.map((num)=> typeof(num));

// console.log(type);

// function typeo(number){
//     var t="j";
//     function set(number){
//         t= typeof(number);
//     }
//     set(number);
//     return t;
// }

// console.log(typeo(3));


const chk =[2,1,4,6,8];
for(let i in chk) console.log(typeof(i));

console.log(chk["3"]);