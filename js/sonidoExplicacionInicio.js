let reproduciendo2 = true;
let miAudio3 = document.getElementById("idAudioBandaSonora");

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento de audio
  let miAudio2 = document.getElementById("idAudiopExplicacion");
  validarBtnSonido2(miAudio2);
});

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

function iniciarReproduccionDespuesDeClic2(miAudio2) {
  // Agrega un evento para pausar la reproducción después de la primera reproducción
  miAudio2.addEventListener("ended", function () {
    pausarYReiniciar2(miAudio2);
    reproduciendo2 = false;
  });
  validarPausarAudio2(miAudio2);
  
}

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

async function validarBtnSonido2(miAudio2) {
  try {
    let documentSvg2 = await cargarDocumentoSVG2("idSvgMusica");
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

function reiniciarReproduccion(audioElement2) {
  // Reinicia la reproducción al principio del audio y reproduce nuevamente
  pausarYReiniciar2(audioElement2);
  audioElement2.play();
}
