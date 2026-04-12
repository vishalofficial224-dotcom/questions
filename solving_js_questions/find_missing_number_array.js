



const number = [1,2,3,4,5,6,8];

let total = 0;
let arraySum = 0;

function missingNumber(value) {
    
    for(let i = 1; i <= value; i++) {
        total = total + i;
    }
    for(let i = 0; i < number.length; i++) {
        arraySum = arraySum + number[i];
    }
    
    let missing = total - arraySum;

    console.log(missing)
}


missingNumber(8)