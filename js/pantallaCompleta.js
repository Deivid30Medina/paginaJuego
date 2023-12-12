var isFullScreen = false; // Variable de estado para rastrear el modo de pantalla completa

document.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  validarEventoClic();
});

document.addEventListener('DOMContentLoaded', function() {
  // Verificar el ancho de la pantalla al cargar la página
  checkScreenWidth();

  // Agregar un listener para el evento de cambio de tamaño de la pantalla
  window.addEventListener('resize', checkScreenWidth);
});

/**
 * Función para valdiar si se dio un click, se valida si se hace fullScreen o exitFullScreen
 */
function validarEventoClic(){
  if (isFullScreen) {
    exitFullScreen();
  } else {
    requestFullScreen();
  }
}

/**
 * Función para validar que cuando el ancho de la pantalla sea menor que 890px se bloquea 
 * la horientación verticual con el fin de permitir mejor jugabilidad en dispositivos moviles 
 */
function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  // Si el ancho de la pantalla es menor que 890px, aplicar bloqueo y pantalla completa
  if (screenWidth < 890) {
    lockOrientation();
  } else {
    unlockOrientation(); // Asegúrate de desbloquear la orientación si no es necesario
  }
}

/**
 * Funcón que bloque la orientación en horizontal
 */
function lockOrientation() {
  // Bloquear la orientación en landscape
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape');
  } else if (screen.lockOrientation) {
    screen.lockOrientation('landscape');
  } 
}

/**
 * Función que valida si se salio del fullScreen y me desboquea la horientación horizontal
 */
function unlockOrientation() {
  // Desbloquear la orientación
  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock();
  } else if (screen.unlockOrientation) {
    screen.unlockOrientation();
  } // Puedes agregar más casos según sea necesario para otros navegadores
}

/**
 * Función que pemrite hacer el fullScreen dependiendo del navegador, 
 * para mayor información puede consultar la documentación de cada navegador.,
 */
function requestFullScreen() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  } else if (elem.webkitEnterFullscreen) { /* Safari */
    elem.webkitEnterFullscreen();
  }
  
  isFullScreen = true; // Actualizar el estado a pantalla completa
}

/**
 * Función que me permite salir del FullScrren dependiendo del navegador.
 */
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari y Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
  
  isFullScreen = false; // Actualizar el estado a no estar en pantalla completa
}
