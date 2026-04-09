

const apple = [{name: "a", age: 20}, {name: "b", age:30}]


const reduce = apple.reduce((acc, curr) => {
    if(curr.name){
        acc.push(curr.name)
    }
    return acc;
}, [])

console.log(reduce)