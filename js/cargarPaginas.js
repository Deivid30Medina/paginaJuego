
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
          //Actualizar el contenido del div con el nuevo html
          mostrarContenido(archivo);
          cambiarTituloPagina(archivo);
        });
    }, 500); // Ajustar el tiempo de carga HTML
    
  }
  
  
  function cambiarTituloPagina(archivo){
    let ubicacion = archivo.split(".html");
    let tituloActual = document.title.split("-");
    let tituloSinExtencion = tituloActual[0];
    let mayusculaTitulo = ubicacion[0].toUpperCase();
    let titulonuevo = tituloSinExtencion+"-"+mayusculaTitulo;
    document.title = titulonuevo;
  }
  
  /**
   * Función que me permite mostrar el nuevo contenido que se desea cargar, dado que se hubiera dado clic en algun btn svg
   * Los nuevos html o contenidos se cargan dentro de un div con id contenido_cambiante
   * @param {*} data - Nombre dek html que se desea cargar dinamicamente
   */
  function mostrarContenido(data) {
    console.log(data);
    window.location.href = data;

  }
  
  
  //Metodo por  AXIOS   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  var svgObjects = document.querySelectorAll(".classSvgContainer");
  
  // Para cada elemento SVG seleccionado, agrega un evento de carga
  svgObjects.forEach(function (svgObject) {
    svgObject.addEventListener("load", function () {
      // Obtiene el documento SVG cargado dentro del objeto <object>
      var svgDocument = svgObject.contentDocument;
  
      // Selecciona todos los elementos con la clase '.elemento-svg' dentro del documento SVG
      var elementsSVG = svgDocument.querySelectorAll(".elemento-svg");
  
      // Para cada elemento con la clase '.elemento-svg', agrega un evento de clic
      elementsSVG.forEach(function (elementoSVG) {
        elementoSVG.onclick = function () {
          // Obtiene el atributo 'data-src' del objeto <object> que contiene el SVG
        var archivoHTML = svgObject.getAttribute("data-src");
          requestFullScreen(); //Funcion de pantalla completa en patnallacompleta.js
          if(archivoHTML != null){
            cargarContenidoDesdeSVG(archivoHTML);// Llama a la función cargarContenido con el archivo HTML como argumento 
          }else{
            let btnInicialSVg = document.getElementById('svgObjectIndex');
            btnInicialSVg.style.display = "none";
            let headerImg = document.getElementById('idHeader');
            headerImg.style.display = "none";
            let btnAgrandar = document.getElementById('svgObjectAgrandar');
            btnAgrandar.style.opacity = 1;
            let objectCargarhtmls = document.getElementById('idObjeto');
            objectCargarhtmls.style.display = "block";
          }
        };
      });
    });
  });
  