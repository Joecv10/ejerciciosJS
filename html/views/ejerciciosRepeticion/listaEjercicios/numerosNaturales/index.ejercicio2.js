import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
import { findSpecialNumbers } from "./encontrar.js";
//Obtener valores del DOM
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");
const resultado = document.getElementById("resultado");

// funciones
// const onButtonCalcular = () => {
//   const arrayNumeros = findNumbers();

//   resultado.innerHTML = `Parejas de números que cumplen con la propiedad: <br/> ${arrayNumeros.forEach(
//     (pair) => {
//       `${pair[0]} x ${pair[1]} = ${pair[0] * pair[1]}`;
//     }
//   )}`;
// };

const onButtonCalcular = () => {
  const numeros = findSpecialNumbers();

  let respuesta = `Los números que cumplen con esta condición son: <br/>`;
  numeros.forEach((num) => {
    respuesta += `${num}<br/>`;
  });
  resultado.innerHTML = respuesta;
};

const onButtonLimpiar = () => {
  limpiarPtag("resultado");
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
