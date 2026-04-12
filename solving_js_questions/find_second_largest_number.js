

// const number = [3, 6 ,9, 48, 0];

// let initial = number[0];
// number.forEach(element => {
//     if(initial < element) {
//         initial = element;
//     }
// })

// const fil = number.filter(ele => ele < initial);

// let one = fil[0];

// fil.forEach(element => {
//     if(one < element) {
//         one = element;
//     }
// })


// let max = -Infinity;
// let second = -Infinity;

// number.forEach(n => {
//     if (n > max) {
//         second = max;
//         max = n;
//     } else if (n > second && n !== max) {
//         second = n;
//     }
// });

// console.log(second);



const number = [3, 12, 10, 9 , 0];

let biggest = number[0];

let second = number[0]

for (let i = 0; i<number.length; i++) {

        if(biggest < number[i]) {
            // second = biggest;
            biggest = number[i];

        }else if (number[i] < biggest && number[i] > second) {
            second = number[i]
        }

}

console.log(second)