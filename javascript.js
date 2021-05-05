let display = document.querySelector("#display");
let clear = document.querySelector(".is-clear");
let button = document.querySelectorAll(".calc-button");
let displayValue = "";

window.onload = function () {
for (var i = 0; i < button.length; i++) {
 button[i].onclick = function () {
     display.value = display.value + this.innerHTML;
     displayValue = display.value
     return false;
}}};

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
    if (operator === "+" ) {
        add(numbera, numberb);
    } else if (operator === "-" ) {
        substract(numbera, numberb);
    } else if (operator === "*") {
        multiply(numbera, numberb);
    } else if (operator ===  "/") {
        divide(numbera, numberb);
    }
}

clear.addEventListener('click', () => {
    display.value = ""
    displayValue = ""
});

