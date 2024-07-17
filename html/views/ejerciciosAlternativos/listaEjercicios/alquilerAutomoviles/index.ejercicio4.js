import { calcularCostoAlquiler } from "./alquiler.js";
import {
  limpiarInputText,
  limpiarPtag,
} from "../../../../../js/limpiarCampos/limpiarCampos.js";
import { validarRealesPositivos } from "../../../../../js/inputValidation/onlyNumbers.js";
import {
  hasText,
  isValidInput,
} from "../../../../../js/inputValidation/inputText.js";

// Obtener valores del DOM
const inputKilometros = document.getElementById("kilometros");
const descKilometros = document.getElementById("kilometros-desc");
const resultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");

//Ocultar boton calcular, limpiar
buttonCalcular.style.display = "none";
buttonLimpiar.style.display = "none";

// Función para mostrar u ocultar el botón Calcular
const toggleButtonCalcular = () => {
  const isKilometrosValid = validarRealesPositivos(inputKilometros);

  if (isKilometrosValid) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

//Validar Campos
const validarKilometros = () => {
  hasText(inputKilometros, buttonLimpiar);
  const isKilometrosValid = validarRealesPositivos(inputKilometros);
  isValidInput(isKilometrosValid, descKilometros);
  toggleButtonCalcular();
  limpiarPtag("resultado");
  return isKilometrosValid;
};

// Funciones
const onButtonCalcular = () => {
  const valorKilometros = parseFloat(inputKilometros.value);

  const { costoTotal, montoIVA, montoSinIVA } =
    calcularCostoAlquiler(valorKilometros);

  resultado.innerHTML = `El monto sin iva es: ${montoSinIVA.toFixed(
    2
  )} <br/> El monto del IVA es: ${montoIVA.toFixed(
    2
  )} <br/> El costo total del alquiler es: ${costoTotal.toFixed(2)}  `;
};

const onButtonLimpiar = () => {
  limpiarInputText("kilometros");
  limpiarPtag("resultado");
  toggleButtonCalcular();
  hasText(inputKilometros, buttonLimpiar);
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputKilometros.addEventListener("input", validarKilometros);
