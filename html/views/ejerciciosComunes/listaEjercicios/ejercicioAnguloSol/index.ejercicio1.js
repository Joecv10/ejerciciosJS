import { calcularAnguloIncidencia } from "./calculos.js";
import {
  limpiarInputText,
  limpiarPtag,
} from "../../../../../js/limpiarCampos/limpiarCampos.js";
import { validarRealesPositivos } from "../../../../../js/inputValidation/onlyNumbers.js";
// Leer valores del HTML
const inputPoste = document.getElementById("alturaPoste");
const inputSombra = document.getElementById("proySombra");
const ptagResultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiarCampos");
const descPoste = document.getElementById("descPoste");
const descSombra = document.getElementById("descSombra");

//Ocultar boton limpiar campos
buttonLimpiar.style.display = "none";
//Deshabilitar boton calcular
buttonCalcular.style.display = "none";

//Funciones

// Validar Campos
const validarInputs = () => {
  const isPosteValid = validarRealesPositivos(inputPoste);
  const isSombraValid = validarRealesPositivos(inputSombra);

  //Color small tag
  if (isPosteValid) {
    descPoste.style.color = "#727272";
  } else {
    descPoste.style.color = "red";
  }

  if (isSombraValid) {
    descSombra.style.color = "black";
  } else {
    descSombra.style.color = "red";
  }

  if (isPosteValid && isSombraValid) {
    buttonCalcular.style.display = "inline-block";
  } else {
    buttonCalcular.style.display = "none";
  }

  // Mostrar el botón "Limpiar Campos" si hay algún valor
  if (inputPoste.value.trim() !== "" || inputSombra.value.trim() !== "") {
    buttonLimpiar.style.display = "inline-block";
  } else {
    buttonLimpiar.style.display = "none";
  }
};

//Calcular Resultados
const onButtonCalcular = () => {
  //Obtener valores numericos
  const alturaPoste = parseFloat(inputPoste.value);
  const longSombra = parseFloat(inputSombra.value);
  //destructuring angulo de incidencia
  const { grados, minutos, segundos } = calcularAnguloIncidencia(
    alturaPoste,
    longSombra
  );
  //String Resultado
  let stringResultado = `El angulo de incidencia es: ${grados}°, ${minutos} mins, ${segundos} segs.`;

  ptagResultado.textContent = stringResultado;

  buttonLimpiar.style.display = "inline-block";
};
//Limpiar campos
const onButtonLimpiar = () => {
  limpiarInputText("alturaPoste");
  limpiarInputText("proySombra");
  limpiarPtag("resultado");

  //Ocultar boton limpiar campos
  buttonLimpiar.style.display = "none";
  // Ocultar botón "Calcular"
  buttonCalcular.style.display = "none";
};

//Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputPoste.addEventListener("input", validarInputs);
inputSombra.addEventListener("input", validarInputs);
