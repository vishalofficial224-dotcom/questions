

// const a = () => {for(let i = 1; i<10; i++) {console.log(i)}};



const users = [
    {firstName : "mango", lastName : "fruit", age: 26},
    {firstName : "banana", lastName : "fruit", age: 45},
    {firstName : "carrot", lastName : "fruit", age: 73},
    {firstName : "tomato", lastName : "fruit", age: 26}
]

const result2 = users.reduce((acc, curr) => {
    if(curr.age < 30) {

        acc[curr.firstName] = curr.age
        
    }

    return acc
}, {})

const result = users.reduce((acc, curr) => {
    if(curr.age < 30) {

        acc.push(curr.firstName)
        
    }

    return acc
}, [])




console.log(result2)
//{ 26 : 2, 73 : 1., 45 : 1 }

const output = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1;
    }
    return acc
}, {});

const obj = {}

obj["apple"] = 5;


obj["apple"]++;

// console.log(obj)