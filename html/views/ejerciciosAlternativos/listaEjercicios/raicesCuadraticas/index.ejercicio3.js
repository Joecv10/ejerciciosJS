import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
import { calcularRaices } from "./raices.js";
import {
  isValidInput,
  hasText,
} from "../../../../../js/inputValidation/inputText.js";
import { validarEntero } from "../../../../../js/inputValidation/onlyNumbers.js";

// Obtener valores del DOM
const inputNum1 = document.getElementById("numero1");
const inputNum2 = document.getElementById("numero2");
const inputNum3 = document.getElementById("numero3");
const resultado = document.getElementById("resultado");
const descNum1 = document.getElementById("numero1-desc");
const descNum2 = document.getElementById("numero2-desc");
const descNum3 = document.getElementById("numero3-desc");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");

//Ocultar boton calcular
buttonCalcular.style.display = "none";
//Ocultar boton limpiar
buttonLimpiar.style.display = "none";

const toggleButtonCalcular = () => {
  const isNum1Valid = validarEntero(inputNum1);
  const isNum2Valid = validarEntero(inputNum2);
  const isNum3Valid = validarEntero(inputNum3);

  if (
    isNum1Valid &&
    inputNum1.value !== "" &&
    isNum2Valid &&
    inputNum2.value !== "" &&
    isNum3Valid &&
    inputNum3.value !== ""
  ) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Validar Inputs
const validarInputNum1 = () => {
  const isValid = validarEntero(inputNum1);

  isValidInput(isValid, descNum1);
  hasText(inputNum1, buttonLimpiar);
  toggleButtonCalcular();
  limpiarPtag("resultado");
};
const validarInputNum2 = () => {
  const isValid = validarEntero(inputNum2);

  isValidInput(isValid, descNum2);
  hasText(inputNum2, buttonLimpiar);
  toggleButtonCalcular();
  limpiarPtag("resultado");
};
const validarInputNum3 = () => {
  const isValid = validarEntero(inputNum3);

  isValidInput(isValid, descNum3);
  hasText(inputNum3, buttonLimpiar);
  toggleButtonCalcular();
  limpiarPtag("resultado");
};

// Funciones
const onButtonCalcular = () => {
  const valorNum1 = parseFloat(inputNum1.value);
  const valorNum2 = parseFloat(inputNum2.value);
  const valorNum3 = parseFloat(inputNum3.value);

  const { raiz1, raiz2 } = calcularRaices(valorNum1, valorNum2, valorNum3);

  resultado.innerHTML = `x1 es: ${raiz1} <br/> x2 es: ${raiz2}`;
};

const onButtonLimpiar = () => {
  inputNum1.value = "";
  inputNum2.value = "";
  inputNum3.value = "";
  limpiarPtag("resultado");
  toggleButtonCalcular();
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputNum1.addEventListener("input", validarInputNum1);
inputNum2.addEventListener("input", validarInputNum2);
inputNum3.addEventListener("input", validarInputNum3);
