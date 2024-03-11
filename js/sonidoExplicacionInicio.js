let reproduciendo2 = true;
let miAudio3 = document.getElementById("idAudioBandaSonora");

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento de audio
  let miAudio2 = document.getElementById("idAudioBandaSonora");
  validarBtnSonido2(miAudio2);
});

/**
 * Función apra validar si el audio esta sonando o no. en base a eso se toma determianada acción.
 * @param {audio} miAudio2 - elemento html audio para saber si se debe reproducir o pausar dependendiendo de su estado actual. 
 */
function validarPausarAudio2(miAudio2){
  // Reproduce el audio si no está actualmente reproduciéndose
  if (!reproduciendo2) {
    miAudio2.play();
    reproduciendo2 = true;
  } else {
    // Si ya está reproduciéndose, pausa y reinicia al principio
    pausarYReiniciar2(miAudio2);
    reproduciendo2 = false;
  }
}

/**
 * Funcion para reiniciar reprodución del audio.
 * @param {audio} miAudio2 - elemento html audio para saber cual se debe reproducir. 
 */
function iniciarReproduccionDespuesDeClic2(miAudio2) {
  // Agrega un evento para pausar la reproducción después de la primera reproducción
  miAudio2.addEventListener("ended", function () {
    pausarYReiniciar2(miAudio2);
    reproduciendo2 = false;
  });
  validarPausarAudio2(miAudio2);
  
}

/**
 * Función que carga el el document del svg que se encuentra dentro del object
 * @param {string} idSvg - id del object que contiene el svg y se desea acceder a su Document
 * @returns Document- que contiene todo el codigo del svg
 */
function cargarDocumentoSVG2(idSvg) {
  return new Promise((resolve, reject) => {
    let svgBtn = document.getElementById(idSvg);
    window.addEventListener("load", function () {
      let documentSvg2 = svgBtn.contentDocument;
      if (documentSvg2) {
        resolve(documentSvg2);
      } else {
        reject(new Error("Error al cargar el documento SVG."));
      }
    });
  });
}

/**
 * Función para validar si se dio un click sobre el svg que esta asociado al sonido de la explciación
 * @param {*} miAudio2 
 */
async function validarBtnSonido2(miAudio2) {
  try {
    let documentSvg2 = await cargarDocumentoSVG2("idSvgMusica2");
    // Selecciona todos los elementos con la clase '.classsSonido' dentro del documento SVG
    let elementsSonido2 = documentSvg2.querySelectorAll(".classsSonido");
    // Para cada elemento con la clase '.classsSonido', agrega un evento de clic
    elementsSonido2.forEach(function (elementoSVG) {
      elementoSVG.onclick = function () {
        if(reproduciendo2){
          validarPausarAudio2(miAudio2);
        }else{
          iniciarReproduccionDespuesDeClic2(miAudio2);
        }
        
      };
    });
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Función para pausar y reiniciar el audio
 * @param {audio} audioElement2 - elemnto html audio. 
 */
function pausarYReiniciar2(audioElement2) {
  // Pausa la reproducción
  audioElement2.pause();

  // Reinicia la reproducción al principio del audio
  audioElement2.currentTime = 0;

  // Pausa la reproducción
  miAudio3.pause();

  // Reinicia la reproducción al principio del audio
  miAudio3.currentTime = 0;
}

/**
 * Función para reproducir el audio
 * @param {audio} audioElement2 - elemnto html audio.
 */
function reiniciarReproduccion(audioElement2) {
  // Reinicia la reproducción al principio del audio y reproduce nuevamente
  pausarYReiniciar2(audioElement2);
  audioElement2.play();
}
