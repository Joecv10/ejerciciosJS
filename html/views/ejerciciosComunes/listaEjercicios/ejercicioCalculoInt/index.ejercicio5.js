import {
  hasText,
  isValidInput,
} from "../../../../../js/inputValidation/inputText.js";
import {
  validarRealesPositivos,
  validarEntero,
} from "../../../../../js/inputValidation/onlyNumbers.js";
import {
  limpiarInputText,
  limpiarPtag,
} from "../../../../../js/limpiarCampos/limpiarCampos.js";
import { calcularTasaInteres } from "./tasaInteres.js";
// Obtener valores del DOM
const inputCapIni = document.getElementById("capIni");
const inputTasaInt = document.getElementById("interes");
const inputAnios = document.getElementById("anios");
const resultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiarCampos");
const descCapIni = document.getElementById("capIni-desc");
const descTasaInt = document.getElementById("interes-desc");
const descAnios = document.getElementById("anios-desc");

//Ocultar boton calcular
buttonCalcular.style.display = "none";
//Ocultar boton limpiar
buttonLimpiar.style.display = "none";

const toggleButtonCalcular = () => {
  const isCapIniValid = validarRealesPositivos(inputCapIni);
  const isTasaIntValid = validarRealesPositivos(inputTasaInt);
  const isAniosValid = validarEntero(inputAnios);

  if (
    isAniosValid &&
    inputAnios.value !== "" &&
    isCapIniValid &&
    isTasaIntValid
  ) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Validar Inputs
const validarAnios = () => {
  const isValid = validarEntero(inputAnios);

  isValidInput(isValid, descAnios);
  hasText(inputAnios, buttonLimpiar);
  toggleButtonCalcular();
};

const validarCapIni = () => {
  hasText(inputCapIni, buttonLimpiar);
  const isCapIniValid = validarRealesPositivos(inputCapIni);
  isValidInput(isCapIniValid, descCapIni);
  toggleButtonCalcular();
  return isCapIniValid;
};
const validarTasaInt = () => {
  hasText(inputTasaInt, buttonLimpiar);
  const isTasaIntValid = validarRealesPositivos(inputTasaInt);
  isValidInput(isTasaIntValid, descTasaInt);
  toggleButtonCalcular();
  return isTasaIntValid;
};

// Funciones
const onButtonCalcular = () => {
  const capIni = parseFloat(inputCapIni.value);
  const tasaInt = parseFloat(inputTasaInt.value);
  const tiempoAnios = parseInt(inputAnios.value);

  const { interesSimple } = calcularTasaInteres(capIni, tasaInt, tiempoAnios);

  resultado.textContent = `La tasa de interés simple es de: $${interesSimple.toFixed(
    2
  )}`;
};

const limpiarCampos = () => {
  limpiarInputText("capIni");
  limpiarInputText("interes");
  inputAnios.value = "";
  limpiarPtag("resultado");
  toggleButtonCalcular();
  hasText(inputCapIni, buttonLimpiar);
  hasText(inputTasaInt, buttonLimpiar);
  hasText(inputAnios, buttonLimpiar);
};

buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", limpiarCampos);
inputCapIni.addEventListener("input", validarCapIni);
inputTasaInt.addEventListener("input", validarTasaInt);
inputAnios.addEventListener("input", validarAnios);
