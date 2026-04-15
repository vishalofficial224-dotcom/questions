


const number = [5, 1, 2, 3, 4];

let biggest = -Infinity;

let second = -Infinity;

for (let i = 0; i<number.length; i++) {

        if(biggest < number[i]) {
            second = biggest;
            
            biggest = number[i];

        }else if (number[i] !== biggest && number[i] >  second) {
            second = number[i]
        }

}

console.log(second)