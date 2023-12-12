window.addEventListener('load', function() {      
  // Agregar un retraso de 3 segundos antes de ejecutar más código
    if (document.readyState === 'complete') {
        let btnRecargar = this.document.getElementById("idImgRecargar");
        btnRecargar.addEventListener("click", function(){
          recargarPaginaClcik();
          
        });
    } else {
        // La página todavía se está cargando
        console.log("La página todavía se está cargando.");
    }
});

/**
 * Función para recargar la apgina en caso tal de que sea necesario llamarlo.
 * 
 */
function recargarPaginaClcik(){
  window.location.reload();
}