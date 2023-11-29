function actualizarLabel() {
    // Obtener el valor de nombreUsuario desde localStorage
    var nombreUsuario = localStorage.getItem('nombreUsuario');
    
    // Obtener el elemento label por su ID
    var labelNombre = document.getElementById('idNombre');
  
    // Asignar el valor al contenido del label 
    labelNombre.textContent = nombreUsuario || "Anonimo"; // Usar un valor predeterminado si nombreUsuario es nulo o indefinido
  }
  
// Llamar a la función para actualizar el label cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarLabel();
});
  