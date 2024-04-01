const opcionRespuestaCorrecta = `
La facultad exclusiva y el derecho que tienen los AuArts o quien sea
el dueño de los derechos patrimoniales (económicos), de sus obras o
prestaciones, para autorizar o no, la creación de ejemplares.
`;
let opcionIncorrecta = [];

function inicializarVariables() {
  opcionIncorrecta = [
    `La facultad y el derecho que tienen los AuArts o quien sea el dueño de los derechos patrimoniales (económicos), de sus obras o prestaciones, para autorizar o no, la creación de ejemplares.`,
    `La posibilidad exclusiva y el derecho que tienen los artistas de que sus obras queden fijadas en un medio digital o físico, para ser disfrutadas por el público.`,
    `La facultad exclusiva y el derecho que tienen los autores o quien sea el dueño de los derechos morales (reconocimiento), de sus obras o prestaciones, para autorizar o no, la creación de ejemplares.`,
    `El derecho de duplicar tus ideas permitiendo la autorización o no de su difusión en otros medios.`,
    `El poder brindado por el Derecho de Autor para replicar la creación de ejemplares de tus propuestas, metodologías, proyectos o similares.`,
  ];
}

function sacarPalabra() {
  let indice, answerIncorrectar;
  indice = Math.floor(Math.random() * opcionIncorrecta.length);
  answerIncorrectar = opcionIncorrecta[indice];
  deleteItemArray(indice);
  return [answerIncorrectar, indice];
}

function randomQuestion() {
  if (opcionIncorrecta.length < 2) {
    inicializarVariables();
  }
  return sacarPalabra();
}

function deleteItemArray(indice) {
  opcionIncorrecta.splice(indice, 1);
}

export {
  randomQuestion,
  opcionRespuestaCorrecta,
  deleteItemArray,
  opcionIncorrecta,
};
