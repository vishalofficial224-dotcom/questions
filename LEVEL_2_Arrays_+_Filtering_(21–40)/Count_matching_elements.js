

//finding  how many items in a collection (like an array or DOM elements) satisfy a certain condition.



const number = [1,3,5,6,7,8,9];


const output = number.filter(x => x%2 === 0).length;



const users = [
    {name: "A", active: true},
    {name: "B", active: false},
    {name: "C", active: true}
]

//seeing how many users are active.

const activeUsers = users.filter(x => x.active).length;

console.log(activeUsers)


// count matching elements = number of items that meet a condition