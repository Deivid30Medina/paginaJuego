window.addEventListener("load", function () {
  // Obtén el elemento de audio
  var miAudio = document.getElementById("idAudiopExplicacion");

  // Inicializa la reproducción del audio después de una interacción del usuario
  document.addEventListener(
    "click",
    function iniciarReproduccionDespuesDeClic() {
      // Elimina el listener para no volver a reproducir después de la interacción inicial
      document.removeEventListener("click", iniciarReproduccionDespuesDeClic);

      // Agrega un evento para pausar la reproducción después de la primera reproducción
      miAudio.addEventListener("ended", function () {
        pausarYReiniciar(miAudio);
      });

      // Reproduce el audio
      miAudio.play();
    }
  );

  validarBtnSonido(miAudio);
  
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

async function validarBtnSonido(miAudio){
    try {
        let documentSvg = await cargarDocumentoSVG('idSvgMusica');
        console.log(documentSvg);
        // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
        let elementsSonido = documentSvg.querySelectorAll(".classsSonido");
        // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
        elementsSonido.forEach(function (elementoSVG) {
            elementoSVG.onclick = function () {
                reiniciarReproduccion(miAudio);
            };
        });
    } catch (error) {
        console.error(error.message);
    }
}

function pausarYReiniciar(audioElement) {
  // Pausa la reproducción
  audioElement.pause();

  // Reinicia la reproducción al principio del audio
  audioElement.currentTime = 0;
}

function reiniciarReproduccion(audioElement) {
  // Reinicia la reproducción al principio del audio y reproduce nuevamente
  pausarYReiniciar(audioElement);
  audioElement.play();
}
