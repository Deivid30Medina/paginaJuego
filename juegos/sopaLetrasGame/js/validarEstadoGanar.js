let estadoGanar = 6;

function palabrasEncontrada(){
    estadoGanar -= 1;
}

function validarOpcionGanar(){
    palabrasEncontrada();
    if (estadoGanar == 0){
        setTimeout(function() {
            window.location.href = "ganaste2.html";  
          }, 2000);
    }
}
