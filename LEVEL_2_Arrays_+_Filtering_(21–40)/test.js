


function debounce(x, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            x.apply(this, args)
        }, delay)
    }
}


function test(x, delay) {

    return function(a) {
        setTimeout(() => {
           x(a) 
        }, delay);
    }
}



const newF = test((x)=> {
    console.log(x)
}, 5000)

newF(8)