

const arr = ["ball", "apple", "car", "burger", "airport", "station", "planet"];

const toFilter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const newArr = []

toFilter.forEach(alphabet => {
    arr.forEach(element => {
        if (alphabet.toLowerCase() === element[0].toLowerCase()) {
                newArr.push(element)
        }
        
    })

})


console.log(newArr)

//mycode