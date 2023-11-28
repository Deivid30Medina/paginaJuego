let tiempoTotal = 10;
let tiempoRestante = tiempoTotal;
let temporizadorElemento ;
let temporizadorId; // Almacena el ID del temporizador actual
let contenedorTemporizador = document.getElementById('idContainerTemporizador');

function actualizarTemporizador() {
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;

  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  temporizadorElemento.textContent = minutos + ':' + segundos;
}

function startTemporizador() {
  // Cancelar el temporizador existente antes de iniciar uno nuevo
  clearTimeout(temporizadorId);
  eliminarTemporizadorHtml();
  crearTemporizadorHtml();
  temporizadorElemento = document.getElementById('timer');
  tiempoRestante = tiempoTotal;
  comenzarTemporizador();
}

function eliminarTemporizadorHtml(){
  let elementoTemporizador = document.getElementById('idTemproizador');
  if (elementoTemporizador) {
    elementoTemporizador.remove();
  }
}

function eliminarAnimacionCss(){
  console.log("Entro")
  let divWrapper = document.getElementById('idWrapper');
  let divSpinner = document.getElementById('idSpinner');
  let divFiller = document.getElementById('idFiller');
  let divMask = document.getElementById('idMask');
  divSpinner.style.animation = "none";
  divFiller.style.animation = "none";
  divMask.style.animation = "none";
  divFiller.style.opacity = 1;
  divMask.style.display = "none";
}

function crearTemporizadorHtml(){
  let nuevoTemporizador = document.createElement('div');
  nuevoTemporizador.id = 'idTemproizador';
  nuevoTemporizador.className = 'classTemporizador';

  // Agrega aquí el contenido HTML para el temporizador
  nuevoTemporizador.innerHTML = `
    <div id="idWrapper" class="wrapper">
      <div id="idSpinner" class="pie spinner"></div>
      <div id="idFiller" class="pie filler"></div>
      <div id="idMask" class="mask"></div>
    </div>
    <p class="classPTemporizador" id="timer">00:00</p>
  `;

  // Adjunta el nuevo temporizador al contenedor
  contenedorTemporizador.appendChild(nuevoTemporizador);
}

function comenzarTemporizador() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
    actualizarTemporizador();
    temporizadorId = setTimeout(comenzarTemporizador, 1000);
  } else {
    eliminarAnimacionCss();
    // Si el tiempo llega a cero, reiniciar el temporizador
    //startTemporizador(); // Reiniciar el temporizador
  }
}

export {
  startTemporizador
};
