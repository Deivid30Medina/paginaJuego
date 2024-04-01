const audioCorrecto = "assets/audios/misiones/mision1/6.-dialogo-6-libro-correcta.mp3";
let opcionIncorrecta = [];
function inicializarVariables(){
    opcionIncorrecta = [
        "assets/audios/misiones/mision1/7.-dialogo-7-libro-incorrecta1.mp3"
        ,"assets/audios/misiones/mision1/8.-dialogo-8-libro-Incorrecta2.mp3"
        ,"assets/audios/misiones/mision1/9.-dialogo-9-libro-Incorrecta3.mp3"
        ,"assets/audios/misiones/mision1/10.-dialogo-10-libro-Incorrecta4.mp3"
        ,"assets/audios/misiones/mision1/11.-dialogo-11-libro-Incorrecta5.mp3"
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