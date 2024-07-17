import { calcularAreaTri } from "./areaTri.js";
import { validarRealesPositivos } from "../../../../../js/inputValidation/onlyNumbers.js";
import {
  limpiarInputText,
  limpiarPtag,
} from "../../../../../js/limpiarCampos/limpiarCampos.js";
import {
  isValidInput,
  hasText,
} from "../../../../../js/inputValidation/inputText.js";
//Leer valores del documento
const inputLado1 = document.getElementById("lado1");
const inputLado2 = document.getElementById("lado2");
const inputLado3 = document.getElementById("lado3");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiarCampos");
const descLado1 = document.getElementById("desc-lado1");
const descLado2 = document.getElementById("desc-lado2");
const descLado3 = document.getElementById("desc-lado3");
const resultado = document.getElementById("resultado");

//Ocultar Button calcular
buttonCalcular.style.display = "none";
//Ocultar Button limpiar
buttonLimpiar.style.display = "none";

// Función para mostrar u ocultar el botón Calcular
const toggleButtonCalcular = () => {
  const isLado1Valid = validarRealesPositivos(inputLado1);
  const isLado2Valid = validarRealesPositivos(inputLado2);
  const isLado3Valid = validarRealesPositivos(inputLado3);

  if (isLado1Valid && isLado2Valid && isLado3Valid) {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};
//Validar Campos
const validarInput1 = () => {
  hasText(inputLado1, buttonLimpiar);
  const isLado1Valid = validarRealesPositivos(inputLado1);
  isValidInput(isLado1Valid, descLado1);
  toggleButtonCalcular();
  return isLado1Valid;
};
const validarInput2 = () => {
  hasText(inputLado2, buttonLimpiar);
  const isLado2Valid = validarRealesPositivos(inputLado2);
  isValidInput(isLado2Valid, descLado2);
  toggleButtonCalcular();
  return isLado2Valid;
};
const validarInput3 = () => {
  hasText(inputLado3, buttonLimpiar);
  const isLado3Valid = validarRealesPositivos(inputLado3);
  isValidInput(isLado3Valid, descLado3);
  toggleButtonCalcular();
  return isLado3Valid;
};

const validarCampos = () => {};

//Funciones

//button calcular
const onButtonCalcular = () => {
  //Obtener valores de los inputs
  const valorLado1 = parseFloat(inputLado1.value);
  const valorLado2 = parseFloat(inputLado2.value);
  const valorLado3 = parseFloat(inputLado3.value);

  //Control campos
  if (
    valorLado1 + valorLado2 > valorLado3 &&
    valorLado1 + valorLado3 > valorLado2 &&
    valorLado2 + valorLado3 > valorLado1
  ) {
    //Destructure respuesta
    const { area } = calcularAreaTri(valorLado1, valorLado2, valorLado3);
    console.log(area);
    //Mostrar Resultado
    resultado.textContent = `El área del triángulo es: ${area.toFixed(
      2
    )} unidades cuadradas`;
  } else {
    alert(
      "La suma de dos lados del triangulo no puede se menor que el tercer lado!\nEstos valores no forman un triángulo"
    );
    onButtonLimpiar();
    hasText(inputLado1, buttonLimpiar);
    hasText(inputLado2, buttonLimpiar);
    hasText(inputLado3, buttonLimpiar);
  }
};
//button Limpiar
const onButtonLimpiar = () => {
  limpiarInputText("lado1");
  limpiarInputText("lado2");
  limpiarInputText("lado3");
  limpiarPtag("resultado");
  toggleButtonCalcular();
  hasText(inputLado1, buttonLimpiar);
  hasText(inputLado2, buttonLimpiar);
  hasText(inputLado3, buttonLimpiar);
};

//Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputLado1.addEventListener("input", validarInput1);
inputLado2.addEventListener("input", validarInput2);
inputLado3.addEventListener("input", validarInput3);
