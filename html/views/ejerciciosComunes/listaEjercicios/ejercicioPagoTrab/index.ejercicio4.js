import {
  limpiarInputText,
  limpiarPtag,
} from "../../../../../js/limpiarCampos/limpiarCampos.js";
import {
  calcularImpuestos,
  calcularPagaNeta,
  calcularPagoBruto,
} from "./calculoPago.js";
import { validarRealesPositivos } from "../../../../../js/inputValidation/onlyNumbers.js";
import {
  hasText,
  isValidInput,
} from "../../../../../js/inputValidation/inputText.js";

// Obtener valores del DOM
const inputHoras = document.getElementById("horas");
const inputTarifa = document.getElementById("tarifa");
const selectImpuesto = document.getElementById("impuestos");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiarCampos");
const descHoras = document.getElementById("horas-desc");
const descTarifa = document.getElementById("tarifa-desc");
const resultado = document.getElementById("resultado");

//Ocultar boton calcular, limpiar
buttonCalcular.style.display = "none";
buttonLimpiar.style.display = "none";

// Función para mostrar u ocultar el botón Calcular
const toggleButtonCalcular = () => {
  const isHorasValid = validarRealesPositivos(inputHoras);
  const isTarifaValid = validarRealesPositivos(inputTarifa);

  if (isHorasValid && isTarifaValid) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};
//Validar Campos
const validarHoras = () => {
  hasText(inputHoras, buttonLimpiar);
  const isHorasValid = validarRealesPositivos(inputHoras);
  isValidInput(isHorasValid, descHoras);
  toggleButtonCalcular();
  return isHorasValid;
};
const validarTarifa = () => {
  hasText(inputTarifa, buttonLimpiar);
  const isTarifaValid = validarRealesPositivos(inputTarifa);
  isValidInput(isTarifaValid, descTarifa);
  toggleButtonCalcular();
  return isTarifaValid;
};

const onButtonCalcular = () => {
  const horasTrabajadas = parseFloat(inputHoras.value);
  const tarifaHoraria = parseFloat(inputTarifa.value);
  const tasaImpuesto = parseFloat(selectImpuesto.value) / 100;

  const { pagaBruta } = calcularPagoBruto(horasTrabajadas, tarifaHoraria);
  const { impuestos } = calcularImpuestos(pagaBruta, tasaImpuesto);
  const { pagoNeto } = calcularPagaNeta(pagaBruta, impuestos);

  resultado.innerHTML = `La paga bruta es: $${pagaBruta} <br>Los impuestos son: $${impuestos.toFixed(
    2
  )} <br>El pago neto es: $${pagoNeto} `;
};

const onButtonLimpiar = () => {
  limpiarInputText("horas");
  limpiarInputText("tarifa");
  limpiarPtag("resultado");
  selectImpuesto.selectedIndex = 0;
  toggleButtonCalcular();
  hasText(inputHoras, buttonLimpiar);
  hasText(inputTarifa, buttonLimpiar);
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputHoras.addEventListener("input", validarHoras);
inputTarifa.addEventListener("input", validarTarifa);
