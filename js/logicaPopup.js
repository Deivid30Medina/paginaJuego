document.addEventListener("DOMContentLoaded", function () {
    validarPopup();
});

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

function mostrarPopup(){
    // Evento PopPup
    popup1.classList.add('show');
}

function ocultarPopup(){
    popup1.classList.remove('show');
}

async function validarPopup(){
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

//Boton de vovler en el popup
let volver = document.getElementById('idPopupClose');

//Venta PopUp que se mostrara.
let popup1 = document.getElementById('idPopupVentana');

volver.addEventListener('click', () => {
    popup1.classList.remove('show');
});