

function x(para) {
    let value = para();
    console.log(value);
}



function y() {
    return "x can access my values!"
}


x(y);



