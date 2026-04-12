

const apple = [1,2,3,4,5,6,7,8,9];

const holder = [];


function rotateRight2(value) {

    for (let i = 0; i < value; i++) {
        holder[i] = apple[i]
        apple[i] = apple[apple.length-1-i]
        apple[apple.length-1-i] = holder[i]
    }
}


const k = 9;

const lastPart = apple.slice(-k);
const firstPart = apple.slice(0, apple.length-k);


console.log(lastPart.concat(firstPart))
