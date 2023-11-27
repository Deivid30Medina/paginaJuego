var reproduciendo = true;

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento de audio
  var miAudio = document.getElementById("idAudiopExplicacion");
  validarBtnSonido(miAudio);
});

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

function iniciarReproduccionDespuesDeClic2(miAudio) {
  // Agrega un evento para pausar la reproducción después de la primera reproducción
  miAudio.addEventListener("ended", function () {
    pausarYReiniciar(miAudio);
    reproduciendo = false;
  });
  validarPausarAudio(miAudio);
  
}

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
