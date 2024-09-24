// const arr=[175, 50, 25];

// console.log(arr.reduce(myFunction))

// function myFunction(acc,value){
//     console.log("Acc:"+acc+"Value:"+value); 
//     return acc-value;
// }

// const str="sumitha"
// const strarr=Array.from(str)
// console.log(strarr);

const str="a ma45n a pl#an a canal panama"
const res=str.split(/[\s\d#]/g)
const res2=str.split(/[^a-b]/g)
console.log(res);
