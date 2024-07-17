export const validarEnteros = (inputField) => {
  const value = inputNumber.value.trim();

  // Check if the entire input string is a valid integer
  if (/^-?\d+$/.test(value)) {
    const enteros = parseInt(value, 10);
    console.log(enteros);
  } else {
    console.log("No es un numero");
  }
};

//Validar Numeros Reales Positivos
export const validarRealesPositivos = (inputField) => {
  const value = inputField.value.trim();

  // Check if the entire input string is a valid number and positive
  if (!isNaN(value) && parseFloat(value) > 0) {
    const numero = parseFloat(value);
    console.log(numero);
    return true;
  } else {
    console.log("No es un número real positivo mayor que cero");
    return false;
  }
};

export const validarEntero = (inputField) => {
  const value = inputField.value.trim();

  // Convertir el valor a un número
  const numberValue = Number(value);

  // Verificar si el valor convertido es un número y si es un entero
  if (!isNaN(numberValue) && Number.isInteger(numberValue)) {
    console.log(numberValue); // Mostrar el valor en la consola
    return true;
  } else {
    return false;
  }
};

export const validarNatural = (inputField) => {
  const value = inputField.value.trim();

  // Convertir el valor a un número
  const numberValue = Number(value);

  // Verificar si el valor convertido es un número y si es un entero
  if (
    !isNaN(numberValue) &&
    Number.isInteger(numberValue) &&
    numberValue > 0 &&
    numberValue < 21
  ) {
    console.log(numberValue); // Mostrar el valor en la consola
    return true;
  } else {
    return false;
  }
};
