
const users = [
    {name: "apple", age: 20},
    {name: "orange", age: 25},
    {name: "banana", age: 22},
]


const result = users.map(element => element.name);
const result2 = users.filter(element => element.age > 20)
console.log(result2)