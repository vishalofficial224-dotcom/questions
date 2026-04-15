




const a = "string";

let b = '';


for (let i in a) {
    b += a[a.length-1-Number(i)]
}

const c = "string";
const d = a.split('').reverse().join('');

console.log(d);