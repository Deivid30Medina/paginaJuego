var reproduciendo = true;

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento de audio
  var miAudio = document.getElementById("idAudiopExplicacion");
  validarBtnSonido(miAudio);
});

/**
 * Funcion para validar cuando pausar el audio
 * @param {audio} miAudio - etiqueta html audio para validar pausar o reproducir 
 */
function validarPausarAudio(miAudio){
  // Reproduce el audio si no está actualmente reproduciéndose
  if (!reproduciendo) {
    miAudio.play();
    reproduciendo = true;
  } else {
    // Si ya está reproduciéndose, pausa y reinicia al principio
    pausarYReiniciar(miAudio);
    reproduciendo = false;
  }
}

/**
 * Función apra reproducir los videos despues del click
 * @param {audio} miAudio - Etiqueta html del audio que se desea reproducir. 
 */
function iniciarReproduccionDespuesDeClic2(miAudio) {
  // Agrega un evento para pausar la reproducción después de la primera reproducción
  miAudio.addEventListener("ended", function () {
    pausarYReiniciar(miAudio);
    reproduciendo = false;
  });
  validarPausarAudio(miAudio);
  
}

/**
 * Función apra cargar el document del svg que esta en el object
 * @param {string} idSvg - Id del object que deseamos obtener el svg 
 * @returns retorna el document del svg
 */
function cargarDocumentoSVG(idSvg) {
  return new Promise((resolve, reject) => {
    let svgBtn = document.getElementById(idSvg);
    window.addEventListener("load", function () {
      let documentSvg = svgBtn.contentDocument;
      if (documentSvg) {
        resolve(documentSvg);
      } else {
        reject(new Error("Error al cargar el documento SVG."));
      }
    });
  });
}

/**
 * Validar si se dio click en el svg para activar o pausar el audio
 * @param {*} miAudio 
 */
async function validarBtnSonido(miAudio) {
  try {
    let documentSvg = await cargarDocumentoSVG("idSvgMusica");
    // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
    let elementsSonido = documentSvg.querySelectorAll(".classsSonido");
    // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
    elementsSonido.forEach(function (elementoSVG) {
      elementoSVG.onclick = function () {
        if(reproduciendo){
          validarPausarAudio(miAudio);
        }else{
          iniciarReproduccionDespuesDeClic2(miAudio);
        }
        
      };
    });
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Función para pausar el audio y reiniciar su reprodución
 * @param {audio} audioElement elemento html audio para poder pausar el audio
 */
function pausarYReiniciar(audioElement) {
  // Pausa la reproducción
  audioElement.pause();

  // Reinicia la reproducción al principio del audio
  audioElement.currentTime = 0;
}

/**
 * Función para reproducir el audio cuando se de un click
 * @param {audio} audioElement elemento html audio que me permite reproducir nuevamente su audio
 */
function reiniciarReproduccion(audioElement) {
  // Reinicia la reproducción al principio del audio y reproduce nuevamente
  pausarYReiniciar(audioElement);
  audioElement.play();
}
