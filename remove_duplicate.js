// function remove_deplicates(array) {
//     const set_var=new Set(array)
//     console.log(set_var);    
// }

function remove_deplicates(arrayvalue) {
    return [...new Set(arrayvalue)]
}
const prompt=require("prompt-sync")({sigint:true})
let size=prompt("Enter the array size:")
let arrayvalue=[]
for(let i=0;i<size;i++){
    arrayvalue[i]=prompt("Enter the array value:")
}
console.log(remove_deplicates(arrayvalue));