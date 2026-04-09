

const check = "variables";

const vowels = "aeiou";

const list = [];
const checker = {}
let count = "";

// finding vowels
for(let i = 0; i < vowels.length; i++) {
    for (let c = 0; c < check.length; c++) {
        if(vowels[i] === check[c]) {
            count += check[c];
        }
    }
}

//making list
for(let j = 0; j < count.length; j++) {
    list.push(count[j])
}

//converting to object
let value = 0
list.forEach(element => {
    value =  0;
    list.forEach(letter => {
        if(element === letter) {
            value++;
        }
    })
    
    checker[element] = value;

})

//converting to list of keys of checker
const keys = Object.keys(checker);

//length of vowels
console.log(keys.length)