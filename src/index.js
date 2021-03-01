import validator from './validator.js';

console.log(validator);

let inputNumberCreditCard = document.getElementById ("inputCreditCard");
    inputNumberCreditCard.oninvalid = function (event) {
        event.target.setCustomValidity("Por favor, introduce solo números del 0 al 9");
    };

    //Obteniendo el número de la tarjeta de crédito introducida por el usuario en el input.

let getNumberCreditCard = function(){
    let listNumbers = document.getElementById("inputCreditCard");
    let inputValues = listNumbers.value;
        
        //Formando un array a partir del número de la tarjeta de crédito obtenida.
        
        let arrayNumbers = [];
        for(let i = 0; i < 16; i++){
        arrayNumbers[i] = parseFloat(inputValues[i]);
    }
        for(let i = 0; i < arrayNumbers.length; i++){
        console.log(arrayNumbers[i]);
    }
    
    //Obteniendo la reversa del array obtenido.

    let reverseArrayNumbers = arrayNumbers.reverse ();
    console.log (reverseArrayNumbers);

    //Obteniendo un nuevo array a partir de los números que se encuentran en la posición par del array (reverseArrayNumbers)

    let numbersEvenPosition = [];

        for (let i = 0; i < 16; i = i + 2){
        numbersEvenPosition[i] = reverseArrayNumbers[i];
        }
        for (let i = 0; i <numbersEvenPosition.length; i = i + 2){
        console.log (numbersEvenPosition[i]);
        }

    //Ahora debemos multiplicar por dos cada número que tenemos en el array numbersEvenPosition (numeros en la posicion par)

    let multiplicationXTwo = [];
    multiplicationXTwo = numbersEvenPosition.flatMap(x => [x * 2]);
        
    console.log (multiplicationXTwo);

    //Si el resultado de la multiplicación de cada dígito es =>10 debemos sumarlos.


   

}

//Haciendo que cuando el usuario presione el botón Validar, se ejecute la función getNumberCreditCard para obtener el array.
let validation = document.getElementById ("Validar");
validation.onclick = getNumberCreditCard;



