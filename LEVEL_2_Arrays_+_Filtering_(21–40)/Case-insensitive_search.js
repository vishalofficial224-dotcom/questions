

const arr = [3, 4, 9, 4, "Ball", "GAME", 45, 6, "TEA"];

const search = 4;


arr.forEach(element => {
    if(element.toString().toLowerCase() === search.toString().toLowerCase()) {
        console.log(element)
    }
})

// const arr2 = ["hell", "Ball", "GAME", "TEA", "potato"];
// const search2 = 'hell'
// arr2.forEach(element => {
//     if(typeof element == 'string') {
//         if(element.toLowerCase() == search2.toLowerCase()) {
//             console.log(element)
//         }
//     }
// })