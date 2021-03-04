const validator = {

    isValid: function (inputValues) {

        //Formando un array a partir del número de la tarjeta de crédito obtenida.

        let arrayNumbers = [];
        for (let i = 0; i < 16; i++) {
            arrayNumbers[i] = parseFloat(inputValues[i]);
        }
        for (let i = 0; i < arrayNumbers.length; i++) {
            console.log(arrayNumbers[i]);
        }

        //Obteniendo la reversa del array obtenido.

        let reverseArrayNumbers = arrayNumbers.reverse();
        console.log(reverseArrayNumbers);

        //Obteniendo un nuevo array donde los números con la posición par se multipliquen por 2.

        let multiplicationXTwo = [];

        for (let i = 0; i < 16; i++) {

            if (i % 2 === 0) {
                multiplicationXTwo[i] = reverseArrayNumbers[i] * 2;

                // Si el número multiplicado por 2, es mayor a 9 sumamos sus dígitos y creamos un nuevo array con ese valor.
                if (multiplicationXTwo[i] > 9) {
                    let numeroDerecho = multiplicationXTwo[i] % 10
                    let numeroizquierdo = parseInt(multiplicationXTwo[i] / 10)
                    multiplicationXTwo[i] = numeroizquierdo + numeroDerecho
                }
            } else multiplicationXTwo[i] = reverseArrayNumbers[i];

            console.log(multiplicationXTwo[i]);
        }

        // Sumar todos los números del array y verificar que el resultado sea múltiplo de 10 para que sea válido.

        let sumatoriaTotal = multiplicationXTwo.reduce(function (a, b) {
            return a + b
        });
        console.log(sumatoriaTotal);
        if (sumatoriaTotal % 10 === 0) {
            return true
        } else {
            return false
        }

    },

    // Haciendo que luego de que el usuario coloque la tarjeta de crédito a validar, solo se muestren l

    maskify: function (listNumbers) {

        let numerosVisibles = listNumbers.substring(listNumbers.length - 4, listNumbers.length);
        let numerosNoVisibles = listNumbers.slice(0, listNumbers.length - 4).replace(/[0-9]/g, "#");
        let unionNumerosVisiblesYNoVisibles = numerosNoVisibles + numerosVisibles;
        return unionNumerosVisiblesYNoVisibles;
    }
};

export default validator;