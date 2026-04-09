

const apple = ["mango", "banana", "sweets", "mango", "sweets", "mango"];

const p = {};
let value = 0;
apple.forEach(element => {
    value = 0;
    if (p[element]) {
        p[element] = p[element] + 1
    }else {
        p[element] = 1
    }

    
})


const keys = Object.keys(p);

console.log(keys)