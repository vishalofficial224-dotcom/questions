

const apple = [6,7,0,9,10];
const mango = [3,2,0,9,8,12,14];

function intersection(arr1, arr2) {
    if(arr1.length >= arr2.length) {
        for (let i = 0; i<arr1.length; i++) {
            if(arr2.includes(arr1[i])) {
                console.log(arr1[i])
            }
        }
    }else {
        for (let i = 0; i < arr2.length; i++) {
            if(arr1.includes(arr2[i])) {
                console.log(arr2[i])
            }
        }
    }
}

intersection(apple, mango)





