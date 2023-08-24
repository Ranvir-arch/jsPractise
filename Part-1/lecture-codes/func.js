// function greatest(a, b){
//     return a>b ? a : b;
// }

// console.log(greatest(14,12));

const eve = num => num%2===0;

console.log(eve(20));

const search =(arr, target, l, r) =>{
    if(r>=l){
    let mid = Math.floor(l+(r-l)/2);
    if(arr[mid] === target) return mid;
    return arr[mid]>target ? search(arr, target, l, mid-1) : search(arr, target, mid+1, r);
    }
    return -1;
}

const arr =[0,1,299,4,3,8,6,9,765] ;
arr.sort((a,b)=> a-b);
console.log(arr);
// console.log(arr.length);
console.log(search(arr,299,0,arr.length-1));