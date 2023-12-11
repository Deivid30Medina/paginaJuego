var reproduciendo = false;

document.addEventListener("DOMContentLoaded", function () {
  // Llamadas para inicializar cada grupo de elementos
  inicializarElementosAudio("idobjectAudio1", ".classsSonidoJuego1");
  inicializarElementosAudio("idobjectAudio2", ".classsSonidoJuego1");
  inicializarElementosAudio("idobjectAudio3", ".classsSonidoJuego1");
});

function validarPausarAudioJuego(miAudio) {
  // Reproduce el audio si no está actualmente reproduciéndose
  if (!reproduciendo) {
    miAudio.play();
    reproduciendo = true;
  } else {
    // Si ya está reproduciéndose, pausa y reinicia al principio
    pausarYReiniciarJuego(miAudio);
    reproduciendo = false;
  }
}

function iniciarReproduccionDespuesDeClic2(miAudio) {
  // Agrega un evento para pausar la reproducción después de la primera reproducción
  miAudio.addEventListener("ended", function () {
    pausarYReiniciarJuego(miAudio);
    reproduciendo = false;
  });
  validarPausarAudioJuego(miAudio);
}

function manejarClicElementoSVG(audioElement) {
  // crear funciones específicas para cada elemento de audio
  return function () {
    let datoAudio = audioElement.getAttribute("data-src");
    let audioHtml = document.getElementById(datoAudio);
    if (reproduciendo) {
        validarPausarAudioJuego(audioHtml);
    } else {
        iniciarReproduccionDespuesDeClic2(audioHtml);
    } 
  };
}

function inicializarElementosAudio(idAudio, classSelector) {
  let audio = document.getElementById(idAudio);
  let svgDocument = audio.contentDocument;
  let elementsSVG = svgDocument.querySelectorAll(classSelector);

  elementsSVG.forEach(function (elementoSVG) {
    elementoSVG.addEventListener("click", manejarClicElementoSVG(audio));
  });
}

function pausarYReiniciarJuego(audioElement) {
  // Pausa la reproducción
  audioElement.pause();

  // Reinicia la reproducción al principio del audio
  audioElement.currentTime = 0;
}

function reiniciarReproduccion(audioElement) {
  // Reinicia la reproducción al principio del audio y reproduce nuevamente
  pausarYReiniciarJuego(audioElement);
  audioElement.play();
}
