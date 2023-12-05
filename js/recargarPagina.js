function reiniciarDocumento() {
    // Verificar si ya se ha solicitado la recarga del documento
    if (!sessionStorage.getItem('yaRecargado')) {
        console.log("entro");
      // Establecer la bandera en el sessionStorage para indicar que ya se solicitó la recarga
      sessionStorage.setItem('yaRecargado', true);
  
      // Recargar la página actual
      location.reload();
    }
  }
  
  // Llama a la función para reiniciar el documento
  reiniciarDocumento();
  