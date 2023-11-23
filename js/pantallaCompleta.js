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

function validarEventoClic(){
  if (isFullScreen) {
    exitFullScreen();
  } else {
    requestFullScreen();
  }
}

function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Si el ancho de la pantalla es menor que 890px, aplicar bloqueo y pantalla completa
  if (screenWidth < 890) {
    lockOrientation();
  } else {
    unlockOrientation(); // Asegúrate de desbloquear la orientación si no es necesario
  }
}

function lockOrientation() {
  // Bloquear la orientación en landscape
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape');
  } else if (screen.lockOrientation) {
    screen.lockOrientation('landscape');
  } // Puedes agregar más casos según sea necesario para otros navegadores
}

function unlockOrientation() {
  // Desbloquear la orientación
  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock();
  } else if (screen.unlockOrientation) {
    screen.unlockOrientation();
  } // Puedes agregar más casos según sea necesario para otros navegadores
}

function requestFullScreen() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari y Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

  isFullScreen = true; // Actualizar el estado a pantalla completa
}

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
