
const prompt=require("prompt-sync")({sigint:true})

let size=prompt("Enter array size: ")
let array=[]
for(let i=0;i<size;i++){
    array[i]=prompt("Enter array value:")
}
array=array.sort(function(a,b){return(a-b);})
console.log(array);
var max=0
outerloop:
for(var i=0;i<size;i++){   
    let num=array[i];
    let count=1;
    for(var j=i+1;j<size;j++){
       
        if((array[j])== Number(Number(num)+Number(1))){
           ++count;
           ++num;
           i++;
           
        }else{
            continue outerloop;
        }
        if(count>max){
            max=count;
        }
    }
   
}
console.log("Largest consequence:"+max);

