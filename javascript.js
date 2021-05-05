function add() {
    let sum = Array.from(arguments).reduce(function(a, b) {
        return a + b;
    })
    console.log(sum);
}
function substract() {
    let rest = Array.from(arguments).reduce(function(a, b) {
        return a - b;
    })
    console.log(rest);
}
function multiply() {
    let multiple = Array.from(arguments).reduce(function(a, b) {
        return a * b;
    })
    console.log(multiple);
}
function divide() {
    let divided = Array.from(arguments).reduce(function(a, b) {
        return a / b;
    })
    console.log(divided);
}

function operate(numbera, operator, numberb) {
    if (operator == "+" ) {
        add(numbera, numberb);
    } else if (operator == "-" ) {
        substract(numbera, numberb);
    } else if (operator == "*") {
        multiply(numbera, numberb);
    } else if (operator ==  "/") {
        divide(numbera, numberb);
    }
}

console.log(operate(5, "/", 5));