var filter = function(arr, fn) {
    let ans = [];
    for(let i in arr){
        if(Boolean(fn(arr[i], Number(i)))){
            ans.push(arr[i]);
        }
    }
    return ans;
};

// let jklm = filter([1,2,3], (n,i)=> i===0);
let jklm = filter([0,10,20,30], (n,i)=> n>10);
console.log(jklm);

// const arr = [1,2,3,4,5];

// arr.splice(4,1);
// console.log(arr);

// console.log(10>10)
