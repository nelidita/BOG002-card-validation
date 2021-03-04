import validator from './validator.js';

console.log(validator);

let inputNumberCreditCard = document.getElementById("inputCreditCard");

//Obteniendo el número de la tarjeta de crédito introducida por el usuario en el input.

let getNumberCreditCard = function () {
    let inputValido = inputNumberCreditCard.checkValidity();
    if (inputValido) {

        let listNumbers = document.getElementById("inputCreditCard");
        let inputValues = listNumbers.value;
        
        let result = validator.isValid(inputValues);
         if (result){
             alert("Numero de tarjeta Válida")
         } else {
             alert ("Por favor introduce una tarjeta válida")
         }
        
        let ocultarNumeros = validator.maskify(inputValues);
        console.log (ocultarNumeros)

    } else {
        alert("Por favor, introduce solo números del 0 al 9");
    }

};

//Haciendo que cuando el usuario presione el botón Validar, se ejecute la función getNumberCreditCard para obtener el array.
let validation = document.getElementById("Validar");
validation.onclick = getNumberCreditCard;

