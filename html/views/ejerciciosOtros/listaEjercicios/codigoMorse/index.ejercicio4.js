const textoInput = document.getElementById("texto");
const calcularButton = document.getElementById("calcular");
const resultadoP = document.getElementById("resultado");
const limpiarButton = document.getElementById("limpiar");
const conversionType = document.getElementById("conversion-type");
const errorMessage = document.getElementById("error-message");

const morseToTextMap = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

const textToMorseMap = Object.fromEntries(
  Object.entries(morseToTextMap).map(([k, v]) => [v, k])
);

function validateInput() {
  const value = textoInput.value.trim();
  let isValid = false;

  if (conversionType.value === "text-to-morse") {
    isValid = /^[A-Za-z0-9 ]*$/.test(value);
  } else if (conversionType.value === "morse-to-text") {
    isValid = /^[.\- ]*$/.test(value);
  }

  errorMessage.style.display = isValid || !value ? "none" : "block";
  calcularButton.style.display = isValid && value ? "inline-block" : "none";
}

function textToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => textToMorseMap[char] || "")
    .join(" ")
    .replace(/\s+/g, " ");
}

function morseToText(morse) {
  return morse
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((char) => morseToTextMap[char] || "")
        .join("")
    )
    .join(" ");
}

function showResult() {
  const value = textoInput.value.trim();

  if (conversionType.value === "text-to-morse") {
    resultadoP.textContent = textToMorse(value);
  } else if (conversionType.value === "morse-to-text") {
    resultadoP.textContent = morseToText(value);
  }
}

function clearFields() {
  textoInput.value = "";
  resultadoP.textContent = "";
  errorMessage.style.display = "none";
  calcularButton.style.display = "none";
}

textoInput.addEventListener("input", validateInput);
calcularButton.addEventListener("click", showResult);
limpiarButton.addEventListener("click", clearFields);
conversionType.addEventListener("change", validateInput);

// Inicializar el botón de calcular como oculto
calcularButton.style.display = "none";
