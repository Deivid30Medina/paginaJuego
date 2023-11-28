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
            console.log(archivo);
            if(archivo !== "misio1.html"){
              mostrarContenido(archivo);
              cambiarTituloPagina(archivo);
            }else{
              if(validarFuncionesAdicionales(archivo)){
                console.log("archivo");
                mostrarContenido(archivo);
                cambiarTituloPagina(archivo);
              }
            }
          });
      }, 500); // Ajustar el tiempo de carga HTML
      
    }

  function validarFuncionesAdicionales(archivo){
    if(archivo === "mision1.html"){
      return guardarNombreUsuario();
    }
  }
  
    /**
   * Función que me permite obtener el alto del html que se esta cargando en el object, co el fin de ajusatr el alto del object
   * @param {bienvenidos.html, creandoConLira_y_Bongo.html,registraTuObra.html,universo.html} archivo archivo html que se esta llamando, no todos los html tiene html sino solo los de la lista.
   */
  function validarObejectHtml(){
      var miObjeto = document.getElementById('idObjeto');
  
      // Esperar a que el contenido se cargue completamente
      miObjeto.onload = function() {
        // Obtener el documento dentro del objeto
        var contenidoDoc = miObjeto.contentDocument;
        
        // Obtener el elemento raíz dentro del documento del objeto
        var contenidoBody = contenidoDoc.body;
        // Obtener la altura del contenido
        var alturaContenido = contenidoBody.clientHeight;
        // Asignar la altura del contenido al objeto
        //miBodyIndex.style.height = (alturaContenido) + 'px';
      };
      
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
      window.location.href = data;  
    }
  
    function mostarrOcultarElementos(){
      let btnInicialSVg = document.getElementById('idImgJugar');
      btnInicialSVg.style.display = "none";
      let headerImg = document.getElementById('idHeader');
      headerImg.style.display = "none";
      let indexElments = document.getElementById('idIndexObjects');
      indexElments.style.display = "none";
      let btnAgrandar = document.getElementById('svgObjectAgrandar');
      btnAgrandar.style.display = "block";
      let objectCargarhtmls = document.getElementById('idObjeto');
      objectCargarhtmls.style.display = "block";
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
            if(archivoHTML != null){
              cargarContenidoDesdeSVG(archivoHTML);// Llama a la función cargarContenido con el archivo HTML como argumento 
            }else{
              mostarrOcultarElementos();
            }
          };
        });
      });
    });
    