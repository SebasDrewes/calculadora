//definicion de elementos DOM
let display = document.querySelector("#display");
let clear = document.querySelector(".is-clear");
let numberButton= document.querySelectorAll(".number-button");
let operatorButton= document.querySelectorAll(".operator-button");
let resultado = document.querySelector(".is-equals");
let punto = document.querySelector(".punto");
let backSpace = document.querySelector(".delete");
//definicion de variables globales
let displayValue = "";
let primerNumero = "";
let primerFloat = 0;
let segundoFloat = 0;
let result = "";
let segundoNumero = "";
let operador = "";
//funciones a ejecutar al abrir pagina
window.onload = numeros(), operadores();

//funcionalidad para botones numeros
function numeros() {
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].onclick = function () {
    display.textContent  = display.textContent  + this.innerHTML;
    if (operador === "") {
        primerNumero = primerNumero + this.innerHTML; 
    } else {
        segundoNumero = segundoNumero + this.innerHTML;
    }
    displayValue = display.textContent
}}};
//funcionalidad para botones operadores
function operadores() {
    for (let i = 0; i < operatorButton.length; i++) {
        operatorButton[i].onclick = function () {
            if (operador === "") {
         display.textContent = display.textContent + this.innerHTML;
         operador = operador + this.innerHTML; 
         displayValue = display.textContent
         punto.disabled = false;
            } else {
        //en caso de mas de un operador en display,
        //resulve numeros actuales
        primerFloat = parseFloat(primerNumero);
        segundoFloat = parseFloat(segundoNumero);
        operate(primerFloat, operador, segundoFloat);
        if (!isNaN(result)){
        display.textContent = result;
        primerNumero = result;
        segundoNumero = "";
        operador = "";
        punto.disabled = false;
        display.textContent = display.textContent + this.innerHTML;
        operador = operador + this.innerHTML; 
        displayValue = display.textContent
            }};
    }}};

//funcion para redondear resultados
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
//funciones para operar en display
function add(a, b) {
    let sum =  a + b;
    let resulta = sum;
    resulta = roundToTwo(resulta);
    result = resulta.toString()
}
function substract(a, b) {
    let rest = a - b;
    let resulta = rest
    resulta = roundToTwo(resulta);
    result = resulta.toString()
}
function multiply(a, b) {
    let multiple = a * b;
    let resulta = multiple;
    resulta = roundToTwo(resulta);
    result = resulta.toString()
}
function divide(a, b) {
    let divided = a / b;
    let resulta = divided;
    resulta = roundToTwo(resulta);
    result = resulta.toString()
}
// funcion para resolver segun operador
function operate(numbera, operator, numberb) {
    if(operator === "+" ) {
        add(numbera, numberb);
    }else if(operator === "-" ) {
        substract(numbera, numberb);
    }else if(operator === "x") {
        multiply(numbera, numberb);
    }else if(operator ===  "÷") {
        divide(numbera, numberb);
    }
}
//funcionalidad boton clear
clear.addEventListener('click', () => {
    display.textContent = "";
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
//functionalidad boton resultado
resultado.addEventListener('click', () => {
    primerFloat = parseFloat(primerNumero);
    segundoFloat = parseFloat(segundoNumero);
    operate(primerFloat, operador, segundoFloat);
    if (!isNaN(result)){
    display.textContent = result;
    primerNumero = result.toString();
    segundoNumero = "";
    operador = "";
    punto.disabled = false;
}});
//funcionalidad boton punto, 
//para que solo pueda escribir uno por numero a operar
punto.onclick = function () {
    display.textContent = display.textContent + this.innerHTML;
    if (operador === "") {
        primerNumero = primerNumero + this.innerHTML; 
        } else {
            segundoNumero = segundoNumero + this.innerHTML;
        }
    punto.disabled = true;
}
//funcionalidad backspace
backSpace.addEventListener('click', () => {
    let displayABorrar = display.textContent.slice(display.textContent.length - 1);
    if (displayABorrar === operador.slice(operador.length - 1)) {
        operador = operador.slice(0, -1);
    }else if(displayABorrar === primerNumero.slice(primerNumero.length - 1)) {
        primerNumero = primerNumero.slice(0, -1);
        result = result.slice(0, -1);
    }else if(displayABorrar === segundoNumero.slice(segundoNumero.length - 1)) {
        segundoNumero = segundoNumero.slice(0, -1);
        result = result.slice(0, -1);
    }display.textContent = display.textContent.slice(0, -1);
    punto.disabled = false;
    resultado.disabled = false;
});