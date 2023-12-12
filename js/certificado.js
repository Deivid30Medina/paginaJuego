// Función para configurar html2pdf con opciones personalizadas
function configurarHtml2Pdf() {
    return html2pdf().set({
        margin: 1,
        filename: 'certificado.pdf', //Nombre del archivo
        // Configuración para la generación de imágenes dentro del PDF
        image: {
            type: 'jpeg', // Tipo de imagen a generar (jpeg, png, etc.)
            quality: 0.98 // Calidad de la imagen (valor entre 0 y 1)
        },
        // Configuración para la generación de imágenes a partir del HTML
        html2canvas: {
            scale: 3, // Escala del lienzo HTML2Canvas (mayor escala para mejores gráficos, pero más peso)
            letterRendering: true, // Actilet renderizado de texto mejorado (puede afectar el rendimiento)
        },
        // Configuración específica de jsPDF (la biblioteca subyacente utilizada por html2pdf)
        jsPDF: {
            unit: "cm", // mm: Milímetros., cm: Centímetros., in: Pulgadas., px: Píxeles.
            format: "a4", // Formato del documento (a3, a4, etc.)
            orientation: 'landscape' // Orientación del documento (landscape(horizontal) o portrait(vertical))
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
        const elementoParaConvertir = document.body; // Puedes elegir cualquier elemento del DOM
        console.log(elementoParaConvertir);
        generarYDescargarPDF(elementoParaConvertir);
      };
    });
  });
});

