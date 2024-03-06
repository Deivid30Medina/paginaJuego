/**
 * Funcion que me permite cargar otras paginas del jeugo, de acorde al svg que se le de click.
 * @param {string} archivo - Archivo que contiene el nombre de la apgina que se va a recargar.
 */
function cargarContenidoDesdeSVG(archivo) {
  setTimeout(function () {
    // Cargar el nuevo contenido
    fetch(archivo)
      .then((response) => response.text())
      .then((data) => {
        //Actualizar el contenido del div con el nuevo html
        let entro = localStorage.getItem("entro");
        if (archivo !== "video-inicio.html" || entro === "true") {
          mostrarContenido(archivo);
          cambiarTituloPagina(archivo);
        } else {
          if (validarFuncionesAdicionales(archivo)) {
            mostrarContenido(archivo);
            cambiarTituloPagina(archivo);
          }
        }
      });
  }, 500); // Ajustar el tiempo de carga HTML
}

/**
 * Función para valdiar el nombre del usuario cuando este coloque un nomnbre de usuario
 * @param {string} archivo - Contiene el html que se desea validar solo sii es igual a video-inicio.html
 * @returns False en caso de que contenga una groseria y true en caso de que el nombre no contenga una groseria.
 */
function validarFuncionesAdicionales(archivo) {
  if (archivo === "video-inicio.html") {
    return guardarNombreUsuario();
  }
}

/**
 *
 * @param {*} archivo
 */
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
 * Funcion que me esconde los elementos del index y muestra los elemntos del inicio para dar comienzo al jeugo
 */
function mostarrOcultarElementos() {
  let btnInicialSVg = document.getElementById("idImgJugar");
  btnInicialSVg.style.display = "none";
  let headerImg = document.getElementById("idHeader");
  headerImg.style.display = "none";
  let indexElments = document.getElementById("idIndexObjects");
  indexElments.style.display = "none";
  let btnAgrandar = document.getElementById("svgObjectAgrandar");
  btnAgrandar.style.display = "block";
  let objectCargarhtmls = document.getElementById("idObjeto");
  objectCargarhtmls.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  let svgObjects = document.querySelectorAll(".classSvgContainer");
  console.log("svgObjects");
  console.log(svgObjects);
  // Para cada elemento SVG seleccionado, agrega un evento de carga
  svgObjects.forEach(function (svgObject) {
    svgObject.addEventListener("load", function () {
      // Obtiene el documento SVG cargado dentro del objeto <object>
      let svgDocument = svgObject.contentDocument;
      console.log("svgDocument");
      console.log(svgDocument);
      // Selecciona todos los elementos con la clase '.elemento-svg' dentro del documento SVG
      let elementsSVG = svgDocument.querySelectorAll(".elemento-svg");
      // Para cada elemento con la clase '.elemento-svg', agrega un evento de clic
      elementsSVG.forEach(function (elementoSVG) {
        elementoSVG.addEventListener("click", function () {
          let archivoHTML = svgObject.getAttribute("data-src");
          if (archivoHTML != null) {
            cargarContenidoDesdeSVG(archivoHTML); // Llama a la función cargarContenido con el archivo HTML como argumento
          } else {
            mostarrOcultarElementos();
          }
        });
      });
    });
  });
});
