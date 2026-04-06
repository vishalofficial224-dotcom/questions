

const number = [2,4,6,8];


const output = number.filter(x => x%2 === 0);

if(number.length === output.length) {
    console.log('all elements matches the condition')
}else {
    console.log('not all element matches the condition')
}

const result = number.every(num => num % 2 === 0);
// “It means verifying that every element in a collection satisfies a given condition, otherwise it returns false.”

console.log(result)