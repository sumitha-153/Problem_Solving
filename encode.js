const prompt=require("prompt-sync")({sigint:true})

function Encoding(str) {

    let str_arr=str.trim().split(" ")
    let res=""
     str_arr.forEach(function (element) {
        res+=element.length +"#"+element
    })
    console.log("Encoded string:\n"+res);
    Decoding(res)
}
function Decoding(res) {
    
   console.log("Decoded string:");
   let result=res.split(/[^a-zA-Z]+/).filter(function (element){
    return element!=''  
   })
   console.log(result);
    
    
}
let str=prompt("Enter the string: ")
Encoding(str)