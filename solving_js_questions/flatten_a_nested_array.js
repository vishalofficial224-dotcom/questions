

//first solution
const apple = ['console', 'ink', 'array', [4, 6 ,7, 9, ["hello", "pass", ['laksd'], ["nemu", "button"]]]];
const newApple = []
// apple.forEach(element => {
//     if(Array.isArray(element)) {
//        num(element, newApple)
//     }else {
//         newApple.push(element)
//     }
// })

// function num(element, arr) { 
//         element.forEach(newEle => {
//             if(Array.isArray(newEle)) {
//                 num(newEle, newApple)
//             }else {
//                 arr.push(newEle);
//             }          
//         })
   
// }


function flattenArray(arr) {
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])) {
            flattenArray(arr[i]);
        }else {
            newApple.push(arr[i]);
        }
    }   
}


flattenArray(apple)
console.log(newApple)