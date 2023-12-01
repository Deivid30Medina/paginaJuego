import {startTemporizador} from './temporizador2.js'

let label = document.querySelector('label[for="Labeltiempo"]');
// Captura el valor del contenido del label
let tiempo = label.innerText || label.textContent;

let labelPerdio = document.querySelector('label[for="LabelPaginaPerdio"]');
// Captura el valor del contenido del label
let paginaPerdio = labelPerdio.innerText || label.textContent;

startTemporizador();