import {crearGame} from '../js/insertQuestion.js'

let estadoJuego = {
    answerCorrecta: ""
};
let btnSeleccionado;


// JavaScript para manejar el clic en los botones
document.querySelectorAll('.classBtnQuestion').forEach(function(btn) {
btn.addEventListener('click', function() {
    // Obtén el valor de data-text-number del botón clickeado
    btnSeleccionado = this.getAttribute('data-text-number');
    validarRespuesta(btn);
});
});

function removerEstilos(btn){
    btn.classList.remove("classBtnIncorrecto");
    btn.classList.remove("classBtnCorrecto");
}


function esperarTiempoCrearNuevoJuego(btn){
    setTimeout(function() {
        crearGame();
        removerEstilos(btn);
    }, 800);
}

function mensajeMostrar(mensaje){
    setTimeout(function() {
        console.log(mensaje);
        if(mensaje === "Ganaste"){
            console.log("mensaje");
            window.location.href = "ganaste1.html";  
        }else{
            window.location.href = "perdiste1.html"; 
        }
    }, 1000);

    
}


function validarRespuesta(btn){
    if(estadoJuego.answerCorrecta == btnSeleccionado){
        mensajeMostrar("Ganaste");
        btn.classList.add("classBtnCorrecto");
    }else{
        mensajeMostrar("Perdiste");
        btn.classList.add("classBtnIncorrecto");
    }
    esperarTiempoCrearNuevoJuego(btn);
}

export {
    estadoJuego,
    btnSeleccionado
};
