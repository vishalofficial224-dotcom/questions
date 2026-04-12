

const apple = [0,0,0,0,0,0, 5, 7, 8, 9];


const newArray = apple.filter(x => x !==0);

const howManyZeros = apple.filter(x => x === 0);



for (let i in howManyZeros) {

    newArray.push(0)
}

console.log(newArray)