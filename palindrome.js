function isPalindrome(string) {
    let str=string.split(/^[a-zA-Z]+/)
    let rev=str.reverse()
    if(str.join("") === rev.join("")){
        console.log("Yes it is palindrome");
    }else{
        console.log("Not a palindrome");
        
    }
}
const prompt=require("prompt-sync")({sigint:true})
let string=prompt("Enter the string: ")
isPalindrome(string)