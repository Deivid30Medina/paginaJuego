let tiempoTotal = 120;
let paginaPerdio = "";
let tiempoRestante = tiempoTotal;
let temporizadorElemento ;
let temporizadorId; // Almacena el ID del temporizador actual
let contenedorTemporizador = document.getElementById('idContainerTemporizador');

/**
 * Función que va a ir restando sucesivamente el tiempo del temporizador
 */
function actualizarTemporizador() {
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;

  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  temporizadorElemento.textContent = minutos + ':' + segundos;
}

/**
 * Función que inicia el temporizador
 * @param {int} tiempo - tiempo con el cual se va a empezar a trabajar 
 * @param {string} paginaMostrar - pagina que va a redireccionar en caso tal de que finalice el temporizador 
 */
function startTemporizador(tiempo, paginaMostrar) {
  tiempoTotal = tiempo;
  paginaPerdio = paginaMostrar;
  // Cancelar el temporizador existente antes de iniciar uno nuevo
  clearTimeout(temporizadorId);
  eliminarTemporizadorHtml();
  crearTemporizadorHtml();
  temporizadorElemento = document.getElementById('timer');
  tiempoRestante = tiempoTotal;
  comenzarTemporizador();
}

/**
 * Función que eliminar el temporizador actual con el fin de ir acutalizando a medida que se va restando el tiempo
 */
function eliminarTemporizadorHtml(){
  let elementoTemporizador = document.getElementById('idTemproizador');
  if (elementoTemporizador) {
    elementoTemporizador.remove();
  }
}

/**
 * Función que me elimina las animaciones actuales del temporizador y agrega de nuevo en caso tal de que se actualcie o 
 * se ingrtese por primera vez
 */
function eliminarAnimacionCss(){
  window.location.href = paginaPerdio;  
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

/**
 * Función que me crea el temporizador
 */
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
    <p class="classPTemporizador" id="timer"></p>
  `;

  // Adjunta el nuevo temporizador al contenedor
  contenedorTemporizador.appendChild(nuevoTemporizador);
}

/**
 * Función que me inicializa el temporizador la primera vez que se entra o recarga
 */
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
