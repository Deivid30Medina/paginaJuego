const audioCorrecto = "assets/audios/juego1/correcta.mp3";
let opcionIncorrecta = [];
function inicializarVariables(){
    opcionIncorrecta = [
        "assets/audios/juego1/incorrecta1.mp3"
        ,"assets/audios/juego1/incorrecta2.mp3"
        ,"assets/audios/juego1/incorrecta3.mp3"
        ,"assets/audios/juego1/incorrecta4.mp3"
        ,"assets/audios/juego1/incorrecta5.mp3"
        ,"assets/audios/juego1/incorrecta6.mp3"
    ];
}

function getAudioIncorrecto(indice){
    let answerIncorrecta = opcionIncorrecta[indice];
    deleteItemArray(indice);
    return answerIncorrecta;
}

function getAudio(indice){
    if(opcionIncorrecta.length < 2){
        inicializarVariables();
    }
    return getAudioIncorrecto(indice);
}

function deleteItemArray(indice){
    opcionIncorrecta.splice(indice,1);
}

export {
    getAudio,
    audioCorrecto
};