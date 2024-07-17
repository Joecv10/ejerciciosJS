import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
import {
  isValidInput,
  hasText,
} from "../../../../../js/inputValidation/inputText.js";
import { validarNatural } from "../../../../../js/inputValidation/onlyNumbers.js";
import { generarSerieFibonacci } from "./fibo.js";

// Obtener valores del DOM
const inputNum1 = document.getElementById("numero1");
const resultado = document.getElementById("resultado");
const descNum1 = document.getElementById("numero1-desc");

const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");

//Ocultar boton calcular
buttonCalcular.style.display = "none";
//Ocultar boton limpiar
buttonLimpiar.style.display = "none";

const toggleButtonCalcular = () => {
  const isNum1Valid = validarNatural(inputNum1);

  if (isNum1Valid && inputNum1.value !== "" && inputNum1.value < 21) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Validar Inputs
const validarInputNum1 = () => {
  const isValid = validarNatural(inputNum1);

  isValidInput(isValid, descNum1);
  hasText(inputNum1, buttonLimpiar);
  toggleButtonCalcular();
  limpiarPtag("resultado");
};

// Funciones
const onButtonCalcular = () => {
  const valorNum1 = parseFloat(inputNum1.value);

  const serieFibo = generarSerieFibonacci(valorNum1);

  let resSerie = `La serie de Fibanacci Generada es: <br/>`;
  serieFibo.forEach((termino) => {
    resSerie += `${termino} <br/>`;
  });
  resultado.innerHTML = resSerie;
};

const onButtonLimpiar = () => {
  inputNum1.value = "";
  limpiarPtag("resultado");
  toggleButtonCalcular();
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputNum1.addEventListener("input", validarInputNum1);
