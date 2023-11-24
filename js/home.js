document.addEventListener("DOMContentLoaded", function () {
    validarHome();
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

async function validarHome(){
    try {
        let documentSvg = await cargarDocumentoSVG('svgObjectHome');
        // Selecciona todos los elementos con la clase '.classHome' dentro del documento SVG
        let elementshOME = documentSvg.querySelectorAll(".classHome");
        // Para cada elemento con la clase '.classHome', agrega un evento de clic
        elementshOME.forEach(function (elementoSVG) {
            elementoSVG.onclick = function () {
                window.open("http://www.derechodeautor.gov.co:8081/tiposDeDerechosDeAutor/", "_blank");
            };
        });
    } catch (error) {
        console.error(error.message);
    }
}