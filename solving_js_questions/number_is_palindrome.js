

const check = "1881"

let compare = ''
for(let i = 0; i < check.length; i++) {
    compare += check[check.length-1-i]
}

if(check.toLowerCase() === compare.toLowerCase()) {
    console.log("this word is palindrome");
}else {
    console.log("this word is not palindrome");
}