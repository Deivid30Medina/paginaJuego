document.addEventListener("DOMContentLoaded", function () {
    validarPopupAbrir2();
    validarPopupCierre2();
});

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

function mostrarPopup2(){
    // Evento PopPup
    popup2.classList.add('show2');
}

function ocultarPopup2(){
    popup2.classList.remove('show2');
}

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
