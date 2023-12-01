//Hola
import { validarTexto } from "../js/validarPalabra.js";
import {startTemporizador} from '../../../js/temporizador.js'

let label = document.querySelector('label[for="Labeltiempo"]');
// Captura el valor del contenido del label
let tiempo = label.innerText || label.textContent;

let labelPerdio = document.querySelector('label[for="LabelPaginaPerdio"]');
// Captura el valor del contenido del label
let paginaPerdio = labelPerdio.innerText || label.textContent;
validarTexto();
setTimeout(function() {
    startTemporizador(tiempo, paginaPerdio);
}, 2000);

