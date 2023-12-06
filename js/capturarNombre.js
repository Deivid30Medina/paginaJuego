const palabrasProhibidas = ["HPT", "GONORREA", "GROSERIA3"];

document.addEventListener("DOMContentLoaded", function () {
  // Llamar a la función después de que se ha cargado completamente el documento
  guardarNombreUsuario();
  
});

function validarGroseria(nombreUsuario) {
  if (palabrasProhibidas.some((palabra) => nombreUsuario.includes(palabra))) {
    alert(
      "El nombre de usuario contiene palabras prohibidas. Por favor, elige otro nombre."
    );
    return false;
  } else {
    return true;
  }
}

function guardarNombreUsuario() {
  // Capturar el valor del input
  let inputNombre = document.getElementById("idNombreINput");
  if (inputNombre) {
    // Verificar si el elemento existe
    let nombreUsuario = inputNombre.value;
    let respuesta = validarGroseria(nombreUsuario);
    // Guardar el valor en localStorage
    if (respuesta) {
      if (nombreUsuario === "") {
        localStorage.setItem("nombreUsuario", "Anónimo");
      } else {
        localStorage.setItem("nombreUsuario", nombreUsuario);
      }
    }
    inputNombre.value = "";
    return respuesta;
  } else {
    console.error('Elemento con id "idNombreInput" no encontrado.');
  }
}
