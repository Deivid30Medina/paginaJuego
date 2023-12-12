import {startTemporizador} from './temporizador.js'

let label = document.querySelector('label[for="Labeltiempo"]');//Obtener el elemento label html que contiene el tiempo
// Captura el valor del contenido del label
let tiempo = label.innerText || label.textContent;

let labelPerdio = document.querySelector('label[for="LabelPaginaPerdio"]');//Obtener el elemento label html que contiene la pagina en caso de perder
// Captura el valor del contenido del label
let paginaPerdio = labelPerdio.innerText || label.textContent;
setTimeout(function() {
    startTemporizador(tiempo, paginaPerdio); //Inicializar el temporizador
}, 2000);

 