

const a = 6;


function factorial(a) {
    if(a === 1 || a === 0) return 1;
    return a * factorial(a-1)
}


console.log(factorial(8))