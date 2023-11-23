function exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari y Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  function mostarrOcultarElementos2(){
    let btnAgrandar = document.getElementById('svgObjectAgrandar');
    btnAgrandar.style.display = "block";
    let btnMinimizar = document.getElementById('svgObjectSalirPantallaGrande');
    btnMinimizar.style.display = "none";
  }

  let ObjectSvg = document.getElementById("svgObjectSalirPantallaGrande");
  let svgArchivo =  ObjectSvg.contentDocument; // Obtiene el documento SVG cargado dentro del objeto <object>
  // Selecciona todos los elementos con la clase '.elemento-svg' dentro del documento SVG
  var elementsSVG = svgArchivo.querySelectorAll(".elemento-svg");
  // Para cada elemento con la clase '.elemento-svg', agrega un evento de clic
  elementsSVG.forEach(function (elementoSVG) {
    elementoSVG.onclick = function () {
      exitFullScreen(); //Funcion de pantalla completa en patnallacompleta.js
      mostarrOcultarElementos2();
    };
  });