function merge_sorted_array(array1,array2) {
    array1.concat(array2)
    array1.sort(function(a,b){return (a-b)})    
    console.log("Ascending order:");    
    console.log(array1);
    array1.sort(function(a,b){return (b-a)})    
    console.log("Descending order:");    
    console.log(array1);
    
    
}
const prompt=require("prompt-sync")({sigint:true}); 
let size =prompt("Enter the array size: ")

let array1=[]
let array2=[]
for(let i=0;i<size;i++){
    array1[i]=prompt("Enter 1 st array value: ")
}
for(let i=0;i<size;i++){
    array2[i]=prompt("Enter 2nd array value: ")
}

merge_sorted_array(array1,array2)