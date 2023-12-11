import {randomQuestion, opcionRespuestaCorrecta} from '../js/banco-de-preguntas.js'
import {getAudio, audioCorrecto} from '../js/banco-de-audios.js'
import {estadoJuego} from '../js/logicaJuego.js'


let posicionPalabras = ["0","1","2"];

function generarRandom(){
    let indice, valorColocar;
    indice = ( Math.floor( Math.random() * (posicionPalabras.length) ) );
    valorColocar = posicionPalabras[indice]
    deleteItemArrayQuestion(indice);
    return valorColocar;
}

function deleteItemArrayQuestion(indice){
    posicionPalabras.splice(indice,1);
}

function obtenerElementoP(indice){
    let elementosP = document.querySelectorAll('.classTextQuestion');
    let elementoEspecifico = Array.from(elementosP).find(elemento => elemento.dataset.textNumber === indice);
    return elementoEspecifico;
    // Encuentra el elemento p con data-text-number igual a "indice"
}

function getElementAudio(indice){
    let ElementosAudios = document.querySelectorAll('.classAudioQuestion');
    let elementoAudioEspecifico = Array.from(ElementosAudios).find(elemento => elemento.dataset.textNumber === indice);
    return elementoAudioEspecifico;
    // Encuentra el elemento p con data-text-number igual a "indice"
}

function insertWord(elementoP, palabra){   
    elementoP.textContent = palabra;
}

function insertAudio(elementoAudio, rutaAudio){   
    elementoAudio.src = rutaAudio;
}

function inicializarVariables(){
    posicionPalabras = ["0","1","2"];
}

function EmpezarJuego(){
    let posicionInsertPalabra, elementoP, elementoAudio, rutaAudio;
    let palabra_e_Indice = [];

    for(let i = 0; i < 2; i++){
        posicionInsertPalabra = generarRandom();                //Obtener posicion alaeatoria para colocar la palabra
        elementoP = obtenerElementoP(posicionInsertPalabra);    //Obtener elemento p del html que coincide
        palabra_e_Indice = randomQuestion();                    // Obtener pregunta incorrecta random
        insertWord(elementoP, palabra_e_Indice[0]);             // Insetar la palabra incorrecta en el elemento html

        elementoAudio = getElementAudio(posicionInsertPalabra);
        rutaAudio = getAudio(palabra_e_Indice[1]);
        insertAudio(elementoAudio, rutaAudio);
    }

    posicionInsertPalabra = posicionPalabras[0];
    estadoJuego.answerCorrecta = posicionInsertPalabra;
    insertWord(obtenerElementoP(posicionPalabras[0]), opcionRespuestaCorrecta);
    insertAudio(getElementAudio(posicionPalabras[0]), audioCorrecto);
}

function crearGame(){
    inicializarVariables();
    EmpezarJuego();
}

export {
    crearGame
};