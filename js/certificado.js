let margin2 = 1;
let filename2 = 'certificado.pdf';
let type2 = 'jpeg';
let quality2 = 0.98;
let scale2 = 3;
let unit2 = "cm";
let format2 = "a4";
let orientation2 = "landscape";


// Función para configurar html2pdf con opciones personalizadas
function configurarHtml2Pdf() {
    return html2pdf().set({
        margin: margin2,
        filename: filename2, //Nombre del archivo
        // Configuración para la generación de imágenes dentro del PDF
        image: {
            type: type2, // Tipo de imagen a generar (jpeg, png, etc.)
            quality: quality2 // Calidad de la imagen (valor entre 0 y 1)
        },
        // Configuración para la generación de imágenes a partir del HTML
        html2canvas: {
            scale: scale2, // Escala del lienzo HTML2Canvas (mayor escala para mejores gráficos, pero más peso)
            letterRendering: true, // Actilet renderizado de texto mejorado (puede afectar el rendimiento)
        },
        // Configuración específica de jsPDF (la biblioteca subyacente utilizada por html2pdf)
        jsPDF: {
            unit: unit2, // mm: Milímetros., cm: Centímetros., in: Pulgadas., px: Píxeles.
            format: format2, // Formato del documento (a3, a4, etc.)
            orientation: orientation2 // Orientación del documento (landscape(horizontal) o portrait(vertical))
        }
    });
}

// Función para generar y descargar el PDF
function generarYDescargarPDF(elementoParaConvertir) {
    configurarHtml2Pdf()
        .from(elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
}


let objectsDescargar = document.querySelectorAll(".classDescargar");
    
// Para cada elemento SVG seleccionado, agrega un evento de carga
objectsDescargar.forEach(function (svgObject) {
  svgObject.addEventListener("load", function () {
    // Obtiene el documento SVG cargado dentro del objeto <object>
    let svgDocument = svgObject.contentDocument;

    // Selecciona todos los elementos con la clase '.elemento-svg' dentro del documento SVG
    let elementsSVG = svgDocument.querySelectorAll(".elemento-svg");
    // Para cada elemento con la clase '.elemento-svg', agrega un evento de clic
    elementsSVG.forEach(function (elementoSVG) {
      elementoSVG.onclick = function () {
        let elementoParaConvertir = document.body; // Puedes elegir cualquier elemento del DOM
        // Crear una copia del elemento
        let copiaElemento = elementoParaConvertir.cloneNode(true);
        copiaElemento.style.width = "1045px";
        copiaElemento.style.height = "700px";
        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth < 890) {
          format2 = "a6";
        }
        generarYDescargarPDF(copiaElemento);
      };
    });
  });
});

