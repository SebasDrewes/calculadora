let display = document.querySelector("#display");
let clear = document.querySelector(".is-clear");
let numberButton= document.querySelectorAll(".number-button");
let operatorButton= document.querySelectorAll(".operator-button");
let resultado = document.querySelector(".is-equals");
let punto = document.querySelector(".punto");
let deleteador = document.querySelector(".delete");
let displayValue = "";
let primerNumero = "";
let primerFloat = 0;
let segundoFloat = 0;
let result = 0;
let segundoNumero = "";
let operador = "";

window.onload = numeros(), operadores();

function nan() {
    if (display.value[0] === "N") {
        display.value = "error";//*--*-*//
        punto.disabled = true;
        resultado.disabled = true;
        for (let i = 0; i < numberButton.length; i++) {
            numberButton[i].disabled = true;
     }   for (let i = 0; i < operatorButton.length; i++) {
            operatorButton[i].disabled = true;
     }}}


function numeros() {
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].onclick = function () {
     nan()
     display.value = display.value + this.innerHTML;
     if (operador === "") {
         primerNumero = primerNumero + this.innerHTML; 
     } else {
         segundoNumero = segundoNumero + this.innerHTML;
     }
     displayValue = display.value
}}};

function operadores() {
    for (let i = 0; i < operatorButton.length; i++) {
        operatorButton[i].onclick = function () {
            nan()
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
            ;
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
    primerFloat = "";
    segundoFloat = "";
    segundoNumero = "";
    result = "";
    punto.disabled = false;
    resultado.disabled = false;
    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].disabled = false;
 }   for (let i = 0; i < operatorButton.length; i++) {
        operatorButton[i].disabled = false;
};
});

resultado.addEventListener('click', () => {
    nan()
    primerFloat = parseFloat(primerNumero);
    segundoFloat = parseFloat(segundoNumero);
    operate(primerFloat, operador, segundoFloat);
    display.value = result;
    primerNumero = result;
    segundoNumero = "";
    operador = "";
    punto.disabled = false;
});


punto.onclick = function () {
    nan()
    display.value = display.value + this.innerHTML;
    if (operador === "") {
        primerNumero = primerNumero + this.innerHTML; 
        } else {
            segundoNumero = segundoNumero + this.innerHTML;
        }
    punto.disabled = true;
}

deleteador.addEventListener('click', () => {
    let displayABorrar = display.value.slice(display.value.length - 1);
    if (displayABorrar === operador.slice(operador.length - 1)) {
        operador = operador.slice(0, -1);
    }else if(displayABorrar === primerNumero.slice(primerNumero.length - 1)) {
        primerNumero = primerNumero.slice(0, -1);
    }else if(displayABorrar === segundoNumero.slice(segundoNumero.length - 1)) {
        segundoNumero = segundoNumero.slice(0, -1);
    }display.value = display.value.slice(0, -1);
});