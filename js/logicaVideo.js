let reproduciendo = true;
let objectBtnReproducir = document.getElementById("idSvgReproducir");

window.addEventListener("load", function () {
  if (document.readyState === "complete") {
    let video = document.getElementById("idVideo");
    video.addEventListener("click", function () {
      pausarReproducir(video);
    });

    // Llama a capturarBtn después de que todos los elementos se han cargado
    capturarBtn(video);

    // Agrega un evento al video para redirigir a otro HTML al finalizar
    video.addEventListener("ended", function () {
      let pagina = video.getAttribute("data-src");
      window.location.href = pagina;
    });
  }
});

/**
 * Función para pausar y reproducir el video.
 * @param {video} video - elemento html que contiene el video 
 */
function pausarReproducir(video) {
  if (reproduciendo) {
    pausarVideo(video);
  } else {
    // Otra lógica si el video no está reproduciéndose
    reproducirVideo(video);
  }
}

/**
 * Funcion que reproduce el video.
 * @param {video} video - elemento html del video para reproducirlo  
 */
function reproducirVideo(video) {
  video.play();
  reproduciendo = true;
  ocultarBtnVideo();
}

/**
 * Función que me pausa el video en caso de que se este reproduciendo.
 * @param {video} video - elemento html que contiene el video que se va a reproducir. 
 */
function pausarVideo(video) {
  video.pause();
  reproduciendo = false;
  mostrarBtnVideo();
}

/**
 * Función que me obtiene el elemento html del video.
 * @param {video} video - elemento html que contiene el video que se va a reproducir. 
 */
function capturarBtn(video) {
  let svgDocumentVideo = objectBtnReproducir.contentDocument;
  let elementsSVGVideo = svgDocumentVideo.querySelectorAll(".classVideo");
  elementsSVGVideo.forEach(function (elementoSVGVideo) {
    elementoSVGVideo.onclick = function () {
      pausarReproducir(video);
    };
  });
}

/**
 * Función para mostrar el icono de reproducir video cuando este pausado.
 */
function mostrarBtnVideo() {
  objectBtnReproducir.classList.add("show");
}

/**
 * Función para ocultar el icono del video cuando se este reproduciendo.
 */
function ocultarBtnVideo() {
  objectBtnReproducir.classList.remove("show");
}
