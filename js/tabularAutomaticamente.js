let longitudMaxima = 0;
let AllInputs = document.querySelectorAll('.classText');

/**
 * Función para calcular la longitud de los inputs que se van a tabualr automaticamnete 
 */
function calcularLongitudForm() {

    let inputs = document.querySelectorAll('.classText');
    longitudMaxima = inputs.length;
}

/**
 * Función que permite tabular automaticamente al siguiente input en caso tal de que se escriba algo en el primero
 * @param {string} currentInput - INput en el cual estamos actualmente situados
 * @param {*} nextInputIndex - Proximo index del input que vamos a tabular
 */
function handleInput(currentInput, nextInputIndex) {
    const inputValue = currentInput.value;
    if (inputValue.length > 1) {
        // Borrar el contenido si hay más de una letra ingresada
        limpiarCasilla(currentInput);
    }

    if (inputValue.length === 1) {
        // Convertir a mayúsculas antes de colocar la letra en el label
        //convertirAMayuscula(currentInput);
        if (nextInputIndex < longitudMaxima) {
            AllInputs[nextInputIndex].focus();
        }
    }
}

/**
 * Función para borrar el contenido del input apenas se le de click
 * @param {input} currentInput - elemnto html que contiene el input 
 */
function borrarContenido(currentInput) {
    currentInput.value = ''; // Borrar el contenido al hacer clic
}

/**
 * Función que me valida que si ahí algo en el input actual me borra su contenido cuando se le de click
 * @param {input} contenido - elemento html input que se desea escribir algo
 */
function limpiarCasilla(contenido) {
    if (contenido.value.length > 0) {
        contenido.value = ''; // Borrar el contenido solo si hay texto
    }
}

/**
 * Función que me va a convertir el contenido del input a mayuscula.
 * @param {input} input - elemtno html input que contiene alguna letra 
 */
function convertirAMayuscula(input) {
    input.value = input.value.toUpperCase(); // Convierte a mayúsculas
}

// Asigna las funciones a los eventos de los inputs
AllInputs.forEach((input, index) => {
    input.addEventListener('input', () => handleInput(input, index + 1));
    input.addEventListener('click', () => {
        borrarContenido(input);
    });
});

calcularLongitudForm();
