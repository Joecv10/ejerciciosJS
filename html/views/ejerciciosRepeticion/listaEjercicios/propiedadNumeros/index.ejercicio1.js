import { findNumbers } from "./propiedad.js";
import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
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
  const arrayNumeros = findNumbers();

  let resultHtml = "Parejas de números que cumplen con la propiedad: <br/>";
  arrayNumeros.forEach((pair) => {
    resultHtml += `${pair[0]} x ${pair[1]} = ${pair[0] * pair[1]}<br/>`;
  });

  resultado.innerHTML = resultHtml;
};

const onButtonLimpiar = () => {
  limpiarPtag("resultado");
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
