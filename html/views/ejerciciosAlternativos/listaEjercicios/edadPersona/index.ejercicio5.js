import { calcularEdad, setFechaActual, validarFecha } from "./fecha.js";
import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
//  Obtener Valores del DOM
const inputFechaNac = document.getElementById("fecha");
const decFecha = document.getElementById("fecha-desc");
const resultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");

//Ocular button calcular
buttonCalcular.style.display = "none";

// Validaciones
const toggleButton = () => {
  const isValidFecha = validarFecha(inputFechaNac, decFecha);

  if (isValidFecha && inputFechaNac.value !== null) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Funciones
const onButtonCalcular = () => {
  const fechaNac = inputFechaNac.value;
  console.log(fechaNac);

  const { edad } = calcularEdad(fechaNac);

  resultado.textContent = `La edad de esta persona es de ${edad} años`;
};

const onButtonLimpiar = () => {
  inputFechaNac.value = null;
  limpiarPtag("resultado");
  toggleButton();
};

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  setFechaActual(inputFechaNac, "fecha", "1900-01-01");
  console.log(inputFechaNac.value);
});
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputFechaNac.addEventListener("input", () =>
  validarFecha(inputFechaNac, decFecha)
);
inputFechaNac.addEventListener("input", toggleButton);
inputFechaNac.addEventListener("input", () => limpiarPtag("resultado"));
