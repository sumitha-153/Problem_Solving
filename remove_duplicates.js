const prompt=require("prompt-sync")({sigint:true})

function remove_deplicates(arrayvalue) {

    let unique_array=[]
    for(let i=0;i<arrayvalue.length;i++){
        if(unique_array.indexOf(arrayvalue[i])===-1){
            unique_array.push(arrayvalue[i])
        }
    }
    console.log(unique_array);
    
    
}
let size=prompt("Enter the array size:")
let arrayvalue=[]
for(let i=0;i<size;i++){
    arrayvalue[i]=prompt("Enter the array value:")
}

remove_deplicates(arrayvalue)