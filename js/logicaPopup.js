document.addEventListener("DOMContentLoaded", function () {
    validarPopupAbrir();
    validarPopupCierre();
});

/**
 * Función para cargar el popup dado que se dio click en el svg del popup
 * @param {string} idSvg id del svg asociado al popup 
 * @returns retorna el contenido del svg en caso de llegar a encontrarlo en caso contrario un error.
 */
function cargarDocumentoSVG(idSvg) {
    return new Promise((resolve, reject) => {
        let svgBtn = document.getElementById(idSvg);
        window.addEventListener('load', function () {
            let documentSvg = svgBtn.contentDocument;
            if (documentSvg) {
                resolve(documentSvg);
            } else {
                reject(new Error('Error al cargar el documento SVG.'));
            }
        });
    });
}

/**
 * Función que le agrega la clase show para mostrar el popup
 */
function mostrarPopup(){
    // Evento PopPup
    popup1.classList.add('show');
}

/**
 * Función que remueve la clase show para ocultar el popup
 */
function ocultarPopup(){
    popup1.classList.remove('show');
}

/**
 * Funcion async para obtener el document del object que contiene el svg0 con el fin de abrir el popup
 */
async function validarPopupAbrir(){
    try {
        let documentSvg = await cargarDocumentoSVG('idSvgPegunta');
        // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
        let elementsSonido = documentSvg.querySelectorAll(".classInformacion");
        // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
        elementsSonido.forEach(function (elementoSVG) {
            elementoSVG.onclick = function () {
                mostrarPopup();
            };
        });
    } catch (error) {
        console.error(error.message);
    }
}


/**
 * Funcion async para obtener el document del object que contiene el svg0 con el fin de cerrar el popup
 */
async function validarPopupCierre(){
    try {
        let documentSvg = await cargarDocumentoSVG('idPopupClose');
        // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
        let elementsSonido = documentSvg.querySelectorAll(".classVovlerPoppup");
        // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
        elementsSonido.forEach(function (elementoSVG) {
            elementoSVG.onclick = function () {
                ocultarPopup();
            };
        });
    } catch (error) {
        console.error(error.message);
    }
}

//Boton de vovler en el popup
let volver = document.getElementById('idPopupClose');

//Venta PopUp que se mostrara.
let popup1 = document.getElementById('idPopupVentana');
