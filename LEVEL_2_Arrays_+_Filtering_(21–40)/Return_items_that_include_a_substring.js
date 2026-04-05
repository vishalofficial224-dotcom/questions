
const str = ['apple', 'ball', 'car', 'guns', 'drugs'];


const search = 'gu'

str.forEach(element => {
    if(element.includes(search)) {
        console.log(element)
    }
})