document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de entrada por su ID
    var nombreInput = document.getElementById('idNombreINput');

    // Agregar un evento de escucha para el evento de entrada
    nombreInput.addEventListener('input', function() {
      // Convertir el texto a mayúsculas y asignarlo de nuevo al campo de entrada
      this.value = this.value.toUpperCase();
    });
  });