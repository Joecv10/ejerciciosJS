import {
  isValidInput,
  hasText,
} from "../../../../../js/inputValidation/inputText.js";
import { validarEntero } from "../../../../../js/inputValidation/onlyNumbers.js";
import { limpiarPtag } from "../../../../../js/limpiarCampos/limpiarCampos.js";
import {
  determinarImpar,
  determinarMultiploCinco,
  determinarSigno,
  esMenorCien,
} from "./operacionesNum.js";

//Obtener valores del DOM
const inputNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const descNumero = document.getElementById("numero-desc");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpiar = document.getElementById("limpiar");

//Ocultar boton calcular
buttonCalcular.style.display = "none";
//Ocultar boton limpiar
buttonLimpiar.style.display = "none";

const toggleButtonCalcular = () => {
  const inNumeroValid = validarEntero(inputNumero);

  if (inNumeroValid && inputNumero.value !== "") {
    buttonCalcular.style.display = "block";
  } else {
    buttonCalcular.style.display = "none";
  }
};

// Validar Inputs
const validarInput = () => {
  const isValid = validarEntero(inputNumero);

  isValidInput(isValid, descNumero);
  hasText(inputNumero, buttonLimpiar);
  toggleButtonCalcular();
  limpiarPtag("resultado");
};

// Funciones
const onButtonCalcular = () => {
  const valorNumero = inputNumero.value;
  // Para Signo
  let resSigno = "";
  const { signo } = determinarSigno(valorNumero);
  if (signo === "No") {
    resSigno = "no tiene signo";
  } else if (signo) {
    resSigno = "es positivo";
  } else {
    resSigno = "es negativo";
  }
  //   Para Impar o no
  const { impar } = determinarImpar(valorNumero);
  let resImpar = impar ? "es impar" : "no es impar";
  // Para multiplo de 5
  const { multiploCinco } = determinarMultiploCinco(valorNumero);
  let resMultiplo = multiploCinco ? "es multiplo de 5" : "no es multiplo de 5";
  //   Para menor
  const { esMenor } = esMenorCien(valorNumero);
  let resMenor = esMenor ? "es menor que 100" : "no es menor que 100";

  resultado.innerHTML = `El número ${valorNumero} ${resSigno} <br/> El número ${valorNumero} ${resImpar} <br/> El número ${valorNumero} ${resMultiplo} <br/> El número ${valorNumero} ${resMenor}`;
};

const onButtonLimpiar = () => {
  inputNumero.value = "";
  limpiarPtag("resultado");
  toggleButtonCalcular();
};

// Eventos
buttonCalcular.addEventListener("click", onButtonCalcular);
buttonLimpiar.addEventListener("click", onButtonLimpiar);
inputNumero.addEventListener("input", validarInput);
