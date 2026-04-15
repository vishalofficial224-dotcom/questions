


//swap two variables value without third variable;


let a = "papad";
let b = "b";




a = a  + b;

b = a.slice(0, a.length - b.length)

a = a.slice(b.length)


let c = "papad";
let d = "dengu";

[c, d] = [d, c];

console.log(c); // dengu
console.log(d); // papad