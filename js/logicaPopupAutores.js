document.addEventListener("DOMContentLoaded", function () {
    validarPopupAbrir2();
    validarPopupCierre2();
});

/**
 * Función para cargar el popup dado que se dio click en el svg del popup
 * @param {string} idSvg id del svg asociado al popup 
 * @returns retorna el contenido del svg en caso de llegar a encontrarlo en caso contrario un error.
 */
function cargarDocumentoSVG2(idSvg) {
    return new Promise((resolve, reject) => {
        let svgBtn = document.getElementById(idSvg);
        window.addEventListener('load', function () {
            let documentSvgAutores = svgBtn.contentDocument;
            if (documentSvgAutores) {
                resolve(documentSvgAutores);
            } else {
                reject(new Error('Error al cargar el documento SVG.'));
            }
        });
    });
}

/**
 * Función que le agrega la clase show para mostrar el popup
 */
function mostrarPopup2(){
    // Evento PopPup
    popup2.classList.add('show2');
}

/**
 * Función que remueve la clase show para ocultar el popup
 */
function ocultarPopup2(){
    popup2.classList.remove('show2');
}


/**
 * Funcion async para obtener el document del object que contiene el svg0 con el fin de abrir el popup
 */
async function validarPopupAbrir2(){
    try {
        let documentSvgAutores = await cargarDocumentoSVG2('idSvgAutores');
        // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
        let elementsSonidoAutores = documentSvgAutores.querySelectorAll(".classPersonaje");
        // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
        elementsSonidoAutores.forEach(function (elementoSVG) {
            elementoSVG.onclick = function () {
                mostrarPopup2();
            };
        });
    } catch (error) {
        console.error(error.message);
    }
}

/**
 * Funcion async para obtener el document del object que contiene el svg0 con el fin de cerrar el popup
 */
async function validarPopupCierre2(){
    try {
        let documentSvgAutores = await cargarDocumentoSVG2('idPopupClose2');
        // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
        let elementsSonidoAutores = documentSvgAutores.querySelectorAll(".classVovlerPoppup");
        // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
        elementsSonidoAutores.forEach(function (elementoSVG) {
            elementoSVG.onclick = function () {
                ocultarPopup2();
            };
        });
    } catch (error) {
        console.error(error.message);
    }
}

//Boton de vovler en el popup
let volverAutores = document.getElementById('idPopupClose2');

//Venta PopUp que se mostrara.
let popup2 = document.getElementById('idPopupVentana2');
