

const arr = [3, 4, 9, "ball", "game", 45, 6]

arr.forEach(element => {
    if(typeof element === "string") {
        console.log(element)
    }
})