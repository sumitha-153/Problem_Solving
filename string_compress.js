const prompt=require("prompt-sync")({sigint:true})

function string_compress(element) {

    let str=element.trim().split("")
    console.log(str);
    let res=""
    let count=0
    for(let i=1;i<=str.length;i++){    
        if(str[i] === str[i-1]){
            ++count;
        }else{
            res+=str[i-1]+(count+1)
            count=0;
        }
        
    }
    console.log(res);
    
    
}
let string=prompt("Enter the string:")
string_compress(string)