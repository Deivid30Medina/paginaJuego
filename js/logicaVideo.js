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
  }
});

function pausarReproducir(video) {
  if (reproduciendo) {
    pausarVideo(video);
  } else {
    // Otra lógica si el video no está reproduciéndose
    reproducirVideo(video);
  }
}

function reproducirVideo(video) {
  video.play();
  reproduciendo = true;
  ocultarBtnVideo();
}

function pausarVideo(video) {
  video.pause();
  reproduciendo = false;
  mostrarBtnVideo();
}

function capturarBtn(video) {
  let svgDocumentVideo = objectBtnReproducir.contentDocument;
  let elementsSVGVideo = svgDocumentVideo.querySelectorAll(".classVideo");
  elementsSVGVideo.forEach(function (elementoSVGVideo) {
    elementoSVGVideo.onclick = function () {
      pausarReproducir(video);
    };
  });
}

function mostrarBtnVideo() {
  objectBtnReproducir.classList.add("show");
}

function ocultarBtnVideo() {
  objectBtnReproducir.classList.remove("show");
}
