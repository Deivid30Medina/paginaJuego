//Diccionario de groserias
const palabrasProhibidas = [
`HPT`
,`GONORREA`
,`GROSERIA3`];

document.addEventListener("DOMContentLoaded", function () {
  // Llamar a la función después de que se ha cargado completamente el documento
  guardarNombreUsuario();
  
});

/**
 * Función que me valida si el nombre ingresado por el usuario contiene alguna groseria
 * @param {string} nombreUsuario - Nombre con el cual se desea jugar
 * @returns - False si contiene alguna groseria y true si no contiene groseria
 */
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

/**
 * Función que me permite guardar el nombre del usaurio en localStorage, en caso de no a ver nombre se guarda anónimo
 * @returns - Retorna el resulktado de validar si el nombre contiene una groseria, puede ser false o true.
 */
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
