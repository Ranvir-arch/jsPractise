//premitive

let num1 = 10;
let num2 = num1;
console.log(`num1 --> ${num1} and num2 --> ${num2}`);
num1 = 30;
console.log(`num1 --> ${num1} and num2 --> ${num2}`);

//reference

let arr1 = [1, 2,3,4,5];
let arr2 = arr1;
console.log(`arr1 -->  [ ${arr1} ] and arr2 -->  [ ${arr2} ]`);
arr1[2] = 1000;
console.log(`arr1 -->  [ ${arr1} ] and arr2 -->  [ ${arr2} ]`);