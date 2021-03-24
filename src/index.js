import validator from './validator.js';

console.log(validator);

//Cuando cargue la págin sólo se vea la página de inicio.
document.getElementById("seleccionPostres").style.display = "none";
document.getElementById("seleccionPasteles").style.display = "none";
document.getElementById("formPago").style.display = "none";

//Hacer que el BOTÓN Postres solo muestre la página de postres.
let llamandoPaginaPostres = function () {
    document.getElementById("containerInicio").style.display = "none";
    document.getElementById("seleccionPostres").style.display = "inline-block";
    document.getElementById("seleccionPasteles").style.display = "none";
    document.getElementById("formPago").style.display = "none";
};
(document.getElementById("botonPostres")).onclick = llamandoPaginaPostres;

//Hacer que el BOTÓN Pasteles solo muestre la página de Pasteles.
let llamandoPaginaPasteles = function () {
    document.getElementById("containerInicio").style.display = "none";
    document.getElementById("seleccionPostres").style.display = "none";
    document.getElementById("seleccionPasteles").style.display = "inline-block";
    document.getElementById("formPago").style.display = "none";
};
(document.getElementById("botonPasteles")).onclick = llamandoPaginaPasteles;

//Mostrando el form de pago
let llamandoFormPago = function () {
    document.getElementById("containerInicio").style.display = "none";
    document.getElementById("seleccionPostres").style.display = "none";
    document.getElementById("seleccionPasteles").style.display = "none";
    document.getElementById("formPago").style.display = "flex";
};
(document.getElementById ("comprarBrownie")).onclick = llamandoFormPago;
(document.getElementById ("comprarPie")).onclick = llamandoFormPago;
(document.getElementById ("comprarRoll")).onclick = llamandoFormPago;
(document.getElementById ("comprarPastel1")).onclick = llamandoFormPago;
(document.getElementById ("comprarPastel2")).onclick = llamandoFormPago;
(document.getElementById ("comprarPastel3")).onclick = llamandoFormPago;

//Obteniendo el número de la tarjeta de crédito introducida por el usuario en el input.
let inputNumberCreditCard = document.getElementById("inputCreditCard");
let formatoDePagoCompleto = document.getElementById("formPago")
let getNumberCreditCard = function () {
    let inputValido = inputNumberCreditCard.checkValidity();
    if (inputValido) {

        let inputValues = inputNumberCreditCard.value;
        let ocultarNumeros = validator.maskify(inputValues);
        let result = validator.isValid(inputValues);
        if (result) {
            //Mostrando en la pantalla del usuario, el mensaje: tarjeta es Válida para que siga con su compra.
        formatoDePagoCompleto.innerHTML = "<img src=imagenes/check.jpg>Tarjeta Válida <br> Puedes continuar con tu compra.<br>" + ocultarNumeros + "<button id='ok'>OK</button>";
        } else {
            //Mostrando en la pantalla del usuario el mensaje: Tarjeta inválida, por favor verifique sus datos.
    formatoDePagoCompleto.innerHTML = "<img src=imagenes/error.jpg> Tarjeta Inválida <br> Por favor verifica tus datos.<br>" + ocultarNumeros+ "<button>Volver</button>";
        }
    } else {
        alert("Por favor, introduce solo números del 0 al 9");
    }
};

//Haciendo que cuando el usuario presione el botón Validar, se ejecute la función getNumberCreditCard para obtener el array.
let validation = document.getElementById("Validar");
validation.onclick = getNumberCreditCard;