//definicion de elementos DOM
const display = document.querySelector("#display");
const numberButton= document.querySelectorAll(".number-button");
const operatorButton= document.querySelectorAll(".operator-button");
const punto = document.querySelector(".punto");
const clear = document.querySelector(".clear");
const backSpace = document.querySelector(".delete");
const resultado = document.querySelector(".equals");
//definicion de variables globales
let primerNumero = "";
let segundoNumero = "";
let operador = "";
let primerFloat = 0;
let segundoFloat = 0;
let result = "";
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
}}};
//funcionalidad para botones operadores
function operadores() {
    for (let i = 0; i < operatorButton.length; i++) {
        operatorButton[i].onclick = function () {
        if (operador === "") {
            display.textContent = display.textContent + this.innerHTML;
            operador = operador + this.innerHTML; 
            punto.disabled = false;
        } else {
        //en caso de mas de un operador en display,
        //resulve numeros actuales
        primerFloat = parseFloat(primerNumero);
        segundoFloat = parseFloat(segundoNumero);
        operate(primerFloat, operador, segundoFloat);
        //en caso de resultado = NaN, no lo muestra.
        if (!isNaN(result)){
        display.textContent = result;
        primerNumero = result;
        segundoNumero = "";
        operador = "";
        punto.disabled = false;
        display.textContent = display.textContent + this.innerHTML;
        operador = operador + this.innerHTML; 
        }};
    }}};

//funcion para redondear resultados
//maximo 9 decimales
function roundToNine(num) {    
    return + (Math.round(num + "e+9")  + "e-9");
}
//funciones para operar en display
function add(a, b) {
    let sum =  a + b;
    let resulta = sum;
    //el resultado se redondea 
    resulta = roundToNine(resulta);
    //se pasa a string para que backSpace funcione correctamente
    result = resulta.toString()
}
function substract(a, b) {
    let rest = a - b;
    let resulta = rest
    resulta = roundToNine(resulta);
    result = resulta.toString()
}
function multiply(a, b) {
    let multiple = a * b;
    let resulta = multiple;
    resulta = roundToNine(resulta);
    result = resulta.toString()
}
function divide(a, b) {
    let divided = a / b;
    let resulta = divided;
    resulta = roundToNine(resulta);
    result = resulta.toString()
}
//funcion para resolver segun operador
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
    window.location.reload();
});
//functionalidad boton resultado
resultado.addEventListener('click', () => {
    primerFloat = parseFloat(primerNumero);
    segundoFloat = parseFloat(segundoNumero);
    operate(primerFloat, operador, segundoFloat);
    //en caso de resultado = NaN, no lo muestra.
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
//funcionalidad backspace,
//ademas de borrar display, borra parte de variables a operar.
backSpace.addEventListener('click', () => {
    let displayABorrar = display.textContent.slice(display.textContent.length - 1);
    if (displayABorrar === operador.slice(operador.length - 1)) {
        operador = operador.slice(0, -1);
    }else if(displayABorrar === primerNumero.slice(primerNumero.length - 1)) {
        primerNumero = primerNumero.slice(0, -1);
        if (displayABorrar === ".") {
            punto.disabled = false;
        }
    }else if(displayABorrar === segundoNumero.slice(segundoNumero.length - 1)) {
        segundoNumero = segundoNumero.slice(0, -1);
        if (displayABorrar === ".") {
            punto.disabled = false;
        }
    }
    display.textContent = display.textContent.slice(0, -1);
});


///////funcionalidad teclado///////

document.addEventListener("keydown", function(event) {
    
function numberosBoton() {
    display.textContent  = display.textContent  + event.key;
    if (operador === "") {
        primerNumero = primerNumero + event.key; 
    } else {
        segundoNumero = segundoNumero + event.key;
    }
}
function operadorBoton() {
    if (operador === "") {
        display.textContent = display.textContent + event.key;
        operador = operador + event.key; 
        punto.disabled = false;
    } else {
    //en caso de mas de un operador en display,
    //resulve numeros actuales
    primerFloat = parseFloat(primerNumero);
    segundoFloat = parseFloat(segundoNumero);
    operate(primerFloat, operador, segundoFloat);
    //en caso de resultado = NaN, no lo muestra.
    if (!isNaN(result)){
    display.textContent = result;
    primerNumero = result;
    segundoNumero = "";
    operador = "";
    punto.disabled = false;
    display.textContent = display.textContent + event.key;
    operador = operador + event.key; 
    }}};

    function operadorMultiplicacion() {
        if (operador === "") {
            display.textContent = display.textContent + "x";
            operador = operador + "x"; 
            punto.disabled = false;
        } else {
        //en caso de mas de un operador en display,
        //resulve numeros actuales
        primerFloat = parseFloat(primerNumero);
        segundoFloat = parseFloat(segundoNumero);
        operate(primerFloat, operador, segundoFloat);
        //en caso de resultado = NaN, no lo muestra.
        if (!isNaN(result)){
        display.textContent = result;
        primerNumero = result;
        segundoNumero = "";
        operador = "";
        punto.disabled = false;
        display.textContent = display.textContent + "x";
        operador = operador + "x"; 
        }}};
    
    function operadorDivision() {
        if (operador === "") {
            display.textContent = display.textContent + "÷";
            operador = operador + "÷"; 
            punto.disabled = false;
        } else {
        //en caso de mas de un operador en display,
        //resulve numeros actuales
        primerFloat = parseFloat(primerNumero);
        segundoFloat = parseFloat(segundoNumero);
        operate(primerFloat, operador, segundoFloat);
        //en caso de resultado = NaN, no lo muestra.
        if (!isNaN(result)){
        display.textContent = result;
        primerNumero = result;
        segundoNumero = "";
        operador = "";
        punto.disabled = false;
        display.textContent = display.textContent + "÷";
        operador = operador + "÷"; 
        }}};
    
switch (event.key) {
    case "Escape":
        event.preventDefault()
        window.location.reload();
    break;
    case "Backspace":
        backSpace.click();
    break;
    case "Enter":
        resultado.click();
    break;
    case ".":
        punto.click();
    break;
    case "0":
        numberosBoton();
    break;
    case "1":
        numberosBoton();
    break;
    case "2":
        numberosBoton();
    break;
    case "3":
        numberosBoton();
    break;
    case "4":
        numberosBoton();
    break;
    case "5":
        numberosBoton();
    break;
    case "6":
        numberosBoton();
    break;
    case "7":
        numberosBoton();
    break;
    case "8":
        numberosBoton();
    break;
    case "9":
        numberosBoton();
    break;
    case "+":
        operadorBoton();
    break;
    case "-":
        operadorBoton();
    break;
    case "*":
        operadorMultiplicacion();
    break;
    case "/":
        operadorDivision();
    break;
}});
