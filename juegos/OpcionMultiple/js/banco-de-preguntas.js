const opcionRespuestaCorrecta = `
La facultad exclusiva y el derecho que tienen los AuArts o quien sea
el dueño de los derechos patrimoniales (económicos), de sus obras o
prestaciones, para autorizar o no, la creación de ejemplares.
`;
let opcionIncorrecta = [];

function inicializarVariables(){
    opcionIncorrecta = [
        `1La posibilidad exclusiva y el derecho que tienen los artistas
        de que sus obras queden fijadas en un medio digital o físico,
        para ser disfrutadas por el público`
        ,`2La posibilidad exclusiva y el derecho que tienen los artistas
        de que sus obras queden fijadas en un medio digital o físico,
        para ser disfrutadas por el público`
        ,`3La posibilidad exclusiva y el derecho que tienen los artistas
        de que sus obras queden fijadas en un medio digital o físico,
        para ser disfrutadas por el público`
        ,`4La posibilidad exclusiva y el derecho que tienen los artistas
        de que sus obras queden fijadas en un medio digital o físico,
        para ser disfrutadas por el público`
        ,`5La posibilidad exclusiva y el derecho que tienen los artistas
        de que sus obras queden fijadas en un medio digital o físico,
        para ser disfrutadas por el público`
        ,`6La posibilidad exclusiva y el derecho que tienen los artistas
        de que sus obras queden fijadas en un medio digital o físico,
        para ser disfrutadas por el público`
    ];
}

function sacarPalabra(){
    let indice, answerIncorrectar;
    indice = ( Math.floor( Math.random() * (opcionIncorrecta.length) ) );
    answerIncorrectar = opcionIncorrecta[indice];
    deleteItemArray(indice);
    return [answerIncorrectar, indice];
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