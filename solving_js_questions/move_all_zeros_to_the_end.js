

const apple = [0,1, 4, 5, 7, 8, 9];



let newArray1 = [];
let newArray2 = [];

function newArray(value) {
    
    for (let i in apple) {
        if (apple[i] === value) {
            newArray1 = apple.slice(0, apple.indexOf(apple[i]))
            newArray2 = apple.slice(apple.indexOf(apple[i])+1)
        }
    }
}


newArray(9)

const newArray3 = newArray1.concat(newArray2)

