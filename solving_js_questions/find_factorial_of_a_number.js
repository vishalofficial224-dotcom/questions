

const factorial = 6;

let acc = 1;
for (let i = 1; i <= factorial; i++){
    acc = acc*i;
}






function fact(number) {
    if (number == 1 || number == 0) return 1;
    
    return number*fact(number-1)
   
}

console.log(fact(6))