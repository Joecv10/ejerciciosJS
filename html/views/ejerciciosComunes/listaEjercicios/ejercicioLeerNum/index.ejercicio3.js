import {
  calcularAntecesor,
  calcularSucesor,
  parteEnteraRaiz,
  numeroCifras,
} from "./operacionesNum.js";
import {
  limpiarInputText,
  limpiarPtag,
} from "../../../../../js/limpiarCampos/limpiarCampos.js";
import {
  hasText,
  isValidInput,
} from "../../../../../js/inputValidation/inputText.js";
import { validarEntero } from "../../../../../js/inputValidation/onlyNumbers.js";
//Obtener valores del DOM
const inputNumber = document.getElementById("numero");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiarCampos");
const descInput = document.getElementById("numero-desc");
const resultado = document.getElementById("resultado");

//Ocultar boton calcular
buttonCalcular.style.display = "none";
//Ocultar boton limpiar
buttonLimpiar.style.display = "none";

const toggleButtonCalcular = () => {
  const isLado1Valid = validarEntero(inputNumber);

  if (isLado1Valid && inputNumber.value !== "") {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Validar Inputs
const validarInput = () => {
  const isValid = validarEntero(inputNumber);

  isValidInput(isValid, descInput);
  hasText(inputNumber, buttonLimpiar);
  toggleButtonCalcular();
};

// Funciones
const calcularValores = () => {
  const inputValue = parseInt(inputNumber.value);

  const { numeroA } = calcularAntecesor(inputValue);
  const { numeroS } = calcularSucesor(inputValue);
  const { parteEntera, isValid } = parteEnteraRaiz(inputValue);
  const { numeroC } = numeroCifras(inputValue);

  let stringR = "";
  if (isValid) {
    stringR = `La parte entera de la raíz es: ${parteEntera}`;
  } else {
    stringR = `No se puede calcular raices cuadradas de número negativos.`;
  }

  resultado.innerHTML = `El número antecesor es: ${numeroA}<br>El número sucesor es: ${numeroS}<br>${stringR}<br>El número de cifras es: ${numeroC}`;
};

const limpiarCampos = () => {
  inputNumber.value = ""; // Limpiar el campo de entrada
  limpiarPtag("resultado");
  hasText(inputNumber, buttonLimpiar);
  toggleButtonCalcular();
};

// Eventos
buttonCalcular.addEventListener("click", calcularValores);
buttonLimpiar.addEventListener("click", limpiarCampos);
inputNumber.addEventListener("input", validarInput);
