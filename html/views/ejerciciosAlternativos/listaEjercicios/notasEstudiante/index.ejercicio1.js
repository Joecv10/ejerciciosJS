import {
  isValidInput,
  hasText,
} from "../../../../../js/inputValidation/inputText.js";
import { validarEntero } from "../../../../../js/inputValidation/onlyNumbers.js";
import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
import { clasificarNota } from "./clasificarNota.js";
//Obtener valores del DOM
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const descNota = document.getElementById("nota-desc");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");

//Ocultar boton calcular
buttonCalcular.style.display = "none";
//Ocultar boton limpiar
buttonLimpiar.style.display = "none";

const toggleButtonCalcular = () => {
  const isNotaValid = validarEntero(inputNota);

  if (isNotaValid && inputNota.value !== "") {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Validar Inputs
const validarInput = () => {
  const isValid = validarEntero(inputNota);

  isValidInput(isValid, descNota);
  hasText(inputNota, buttonLimpiar);
  toggleButtonCalcular();
};

// Funciones
const onButtonCalcular = () => {
  const valorNota = parseInt(inputNota.value);

  const { valor } = clasificarNota(valorNota);

  if (valor === "ND") {
    alert("Ingrese una nota valida, esta debe estar el rango [0 - 100]");
    onButtonLimpiar();
  } else {
    resultado.textContent = `La categoría de la nota del alumno es: ${valor}`;
  }
};

const onButtonLimpiar = () => {
  inputNota.value = "";
  limpiarPtag("resultado");
  toggleButtonCalcular();
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputNota.addEventListener("input", validarInput);
