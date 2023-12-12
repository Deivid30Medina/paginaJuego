/**
 * Función que me carga los html cuando se le da clic algun btn svg del sitio
 * @param {*} archivo contiene el nombre del html que se desea cargar en la pagina
 */
function cargarContenidoDesdeSVG(archivo) {
  setTimeout(function () {
    // Cargar el nuevo contenido
    fetch(archivo)
      .then((response) => response.text())
      .then((data) => {
        mostrarContenido(archivo);
      });
  }, 500); // Ajustar el tiempo de carga HTML
}

function validarFuncionesAdicionales(archivo) {
  if (archivo === "mision1.html") {
    return guardarNombreUsuario();
  }
}

function cambiarTituloPagina(archivo) {
  let ubicacion = archivo.split(".html");
  let tituloActual = document.title.split("-");
  let tituloSinExtencion = tituloActual[0];
  let mayusculaTitulo = ubicacion[0].toUpperCase();
  let titulonuevo = tituloSinExtencion + "-" + mayusculaTitulo;
  document.title = titulonuevo;
}

/**
 * Función que me permite mostrar el nuevo contenido que se desea cargar, dado que se hubiera dado clic en algun btn svg
 * Los nuevos html o contenidos se cargan dentro de un div con id contenido_cambiante
 * @param {*} data - Nombre dek html que se desea cargar dinamicamente
 */
function mostrarContenido(data) {
  window.location.href = data;
}

/**
 * Función para validar que las letras ingresadas por el usuario es la correcta
 * @returns respuesta - valor true si es ccoincide y false en caso contrario. 
 */
function validarRespuesta(respuesta){
    let coinciden = false;
    let inputs = document.querySelectorAll(".classLetraPregunta");
    let concatenado = "";
    inputs.forEach(function(input) {
        concatenado += input.value.toUpperCase();
    });
    if(concatenado === respuesta){
        coinciden = true;
    }
    return coinciden;
}



let svgObjects = document.querySelectorAll(".classSvgContainer");

// Para cada elemento SVG seleccionado, agrega un evento de carga
svgObjects.forEach(function (svgObject) {
  svgObject.addEventListener("load", function () {
    // Obtiene el documento SVG cargado dentro del objeto <object>
    let svgDocument = svgObject.contentDocument;

    // Selecciona todos los elementos con la clase '.classConfirmar' dentro del documento SVG
    let elementsSVG = svgDocument.querySelectorAll(".classConfirmar");
    // Para cada elemento con la clase '.classConfirmar', agrega un evento de clic
    elementsSVG.forEach(function (elementoSVG) {
      elementoSVG.onclick = function () {

        let respuesta = svgObject.getAttribute("data-palabra");
        let coinciden = validarRespuesta(respuesta);
        //Validar si la palabras coinciden con la respuesta    
        if (coinciden){
            let correcta = svgObject.getAttribute("data-gano");
            cargarContenidoDesdeSVG(correcta); // Llama a la función cargarContenido con el archivo HTML como argumento
        } else {
            let incorrecta = svgObject.getAttribute("data-perdio");
            cargarContenidoDesdeSVG(incorrecta); // Llama a la función cargarContenido con el archivo HTML como argumento
        }
      };
    });
  });
});
