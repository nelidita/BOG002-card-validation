const validator = {

    isValid: function (inputValues) {

        //Formando un array a partir del número de la tarjeta de crédito obtenida.
        let arrayNumbers = [];
        let indexInputValues = inputValues.length;
        for (let i = 0; i < indexInputValues; i++) {
            arrayNumbers[i] = parseInt(inputValues[i]);
        }
        
        //Obteniendo la reversa del array obtenido.
        let reverseArrayNumbers = arrayNumbers.reverse();
        
        //Obteniendo un nuevo array donde los números con la posición par se multipliquen por 2.
        let multiplicationXTwo = [];
        for (let i = 0; i < indexInputValues; i++) {

            if (i % 2 === 1) {
                multiplicationXTwo[i] = reverseArrayNumbers[i] * 2;
                
                // Si el número multiplicado por 2, es mayor a 9 sumamos sus dígitos y creamos un nuevo array con ese valor.
                if (multiplicationXTwo[i] > 9) {
                    let numeroDerecho = multiplicationXTwo[i] % 10
                    let numeroizquierdo = parseInt(multiplicationXTwo[i] / 10)
                    multiplicationXTwo[i] = numeroizquierdo + numeroDerecho
                }
            } else multiplicationXTwo[i] = reverseArrayNumbers[i];
        }

        // Sumar todos los números del array y verificar que el resultado sea múltiplo de 10 para que sea válido.
        let sumatoriaTotal = multiplicationXTwo.reduce(function (a, b) {
            return a + b
        });
        
        if (sumatoriaTotal % 10 === 0) {
            return true
        } else {
            return false
        }
    },

    // Haciendo que luego de que el usuario coloque la tarjeta de crédito a validar, solo se muestren l
    maskify: function (inputValues) {

        let numerosVisibles = inputValues.substring(inputValues.length - 4, inputValues.length);
        let numerosNoVisibles = inputValues.slice(0, inputValues.length - 4).replace(/[0-9,a-z,A-Z]/g, "#");
        let unionNumerosVisiblesYNoVisibles = numerosNoVisibles + numerosVisibles;
        return unionNumerosVisiblesYNoVisibles;
    }
}
export default validator;