

const arr = ["apple", "ball", "cat", "create"];


const newArr = [];

arr.forEach((element, index) => {
    
    newArr.push(arr[arr.length-1-index])
})


console.log(newArr)
