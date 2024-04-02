// Obtener referencia al objeto <object>
let miObjeto = document.getElementById("idObjeto");

// Función para ejecutar después de cargar el contenido del objeto
function ejecutarDespuesDeCargar() {
  // Obtener el documento cargado dentro del objeto
  let documentoCargado = miObjeto.contentDocument;

  if (documentoCargado) {
    // Obtener el título del documento
    let tituloDocumento = documentoCargado.title;
    ActualizarTitulo(tituloDocumento);
  } else {
    console.log("No se pudo obtener el documento cargado.");
  }
}

function ActualizarTitulo(tituloDocumento){
    let tituloActual = document.title.split("_");
    document.title = `${tituloActual[0]}_${tituloDocumento}`
    // Cambiar la URL a una versión más amigable
    // history.pushState(null, null, "mi-url-amigable");

}

// Agregar evento 'load' al objeto para llamar a la función después de cargar
miObjeto.addEventListener("load", ejecutarDespuesDeCargar);
