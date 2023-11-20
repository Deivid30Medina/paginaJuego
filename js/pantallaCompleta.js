document.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  requestFullScreen();
});


document.addEventListener('DOMContentLoaded', function() {
  // Verificar el ancho de la pantalla al cargar la página
  checkScreenWidth();

  // Agregar un listener para el evento de cambio de tamaño de la pantalla
  window.addEventListener('resize', checkScreenWidth);

});

function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Si el ancho de la pantalla es menor que 800px, aplicar bloqueo y pantalla completa
  if (screenWidth < 800) {
    lockOrientation();
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
}

