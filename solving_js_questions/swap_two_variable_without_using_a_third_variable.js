


let word = "tshirt";
let fruit = "pant";


word = word + "0"

for(let i = 0; i < fruit.length; i++) {
    word += fruit[i]

}



fruit = fruit + "0"
for (let i = 0; i < word.length; i++) {
    if(word[i] !== "0") {
        fruit += word[i]
    }else {
        break;
    }
}


for (let i = 0; i<word.length; i++) {
    if (word[i] === "0") {
        word = word.slice(i+1)
        
    }
}

for (let i = 0; i<fruit.length; i++) {
    if (fruit[i] === "0") {
        fruit = fruit.slice(i+1)
        
    }
}

console.log("word is now:" + word)
console.log("fruit is now:" + fruit)

