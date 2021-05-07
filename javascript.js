let display = document.querySelector("#display");
let clear = document.querySelector(".is-clear");
let numberButton= document.querySelectorAll(".number-button");
let operatorButton= document.querySelectorAll(".operator-button");
let resultado = document.querySelector(".is-equals");
let punto = document.querySelector(".punto");
let displayValue = "";
let primerNumero = "";
let primerFloat = 0;
let segundoFloat = 0;
let result = 0;
let segundoNumero = "";
let operador = "";

window.onload = numeros(), operadores();

function numeros() {
for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].onclick = function () {
     display.value = display.value + this.innerHTML;
     if (operador === "") {
         primerNumero = primerNumero + this.innerHTML; 
     } else {
         segundoNumero = segundoNumero + this.innerHTML;
     }
     displayValue = display.value
}}};

function operadores() {
    for (var i = 0; i < operatorButton.length; i++) {
        operatorButton[i].onclick = function () {
            if (operador === "") {
         display.value = display.value + this.innerHTML;
         operador = operador + this.innerHTML; 
         displayValue = display.value
         punto.disabled = false;
            } else {
            primerFloat = parseFloat(primerNumero);
            segundoFloat = parseFloat(segundoNumero);
            operate(primerFloat, operador, segundoFloat);
            display.value = result;
            primerNumero = result;
            segundoNumero = "";
            operador = "";
            punto.disabled = false;
            display.value = display.value + this.innerHTML;
            operador = operador + this.innerHTML; 
            displayValue = display.value
            }
    }}};

function add() {
    let sum = Array.from(arguments).reduce(function(a, b) {
        return a + b;
    })
    result = sum;
}
function substract() {
    let rest = Array.from(arguments).reduce(function(a, b) {
        return a - b;
    })
    result = rest
}
function multiply() {
    let multiple = Array.from(arguments).reduce(function(a, b) {
        return a * b;
    })
    result = multiple
}
function divide() {
    let divided = Array.from(arguments).reduce(function(a, b) {
        return a / b;
    })
    result = divided
}

function operate(numbera, operator, numberb) {
    if (operator === "+" ) {
        add(numbera, numberb);
    } else if (operator === "-" ) {
        substract(numbera, numberb);
    } else if (operator === "x") {
        multiply(numbera, numberb);
    } else if (operator ===  "÷") {
        divide(numbera, numberb);
    }
}

clear.addEventListener('click', () => {
    display.value = "";
    displayValue = "";
    operador = "";
    primerNumero = "";
    segundoNumero = "";
    punto.disabled = false;
});

resultado.addEventListener('click', () => {
    primerFloat = parseFloat(primerNumero);
    segundoFloat = parseFloat(segundoNumero);
    operate(primerFloat, operador, segundoFloat);
    primerNumero = result;
    punto.disabled = false;
});

punto.onclick = function () {
    display.value = display.value + this.innerHTML;
    if (operador === "") {
        primerNumero = primerNumero + this.innerHTML; 
        } else {
            segundoNumero = segundoNumero + this.innerHTML;
        }
    punto.disabled = true;
}