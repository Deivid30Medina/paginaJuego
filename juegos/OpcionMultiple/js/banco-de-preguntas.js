const opcionRespuestaCorrecta = "Esta es correcta";
let opcionIncorrecta = [];

function inicializarVariables(){
    opcionIncorrecta = [
        "Esta no es 0"
        ,"Esta no es 1"
        ,"Esta no es 2"
        ,"Esta no es 3"
        ,"Esta no es 4"
        ,"Esta no es 5"
        ,"Esta no es 6"
        ,"Esta no es 7"
        ,"Esta no es 8"
        ,"Esta no es 9"
        ,"Esta no es 10"
    ];
}

function sacarPalabra(){
    let indice, answerIncorrectar;
    indice = ( Math.floor( Math.random() * (opcionIncorrecta.length) ) );
    answerIncorrectar = opcionIncorrecta[indice];
    deleteItemArray(indice);
    return answerIncorrectar;
}

function randomQuestion(){
    if(opcionIncorrecta.length < 2){
        inicializarVariables();
    }
    return sacarPalabra();
}

function deleteItemArray(indice){
    opcionIncorrecta.splice(indice,1);
}

export {
    randomQuestion,
    opcionRespuestaCorrecta,
    deleteItemArray,
    opcionIncorrecta
};