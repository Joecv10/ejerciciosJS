export const calcularAntecesor = (numero) => {
  if (numero >= 0) {
    return { numeroA: numero - 1 };
  } else {
    return { numeroA: numero + 1 };
  }
};

export const calcularSucesor = (numero) => {
  if (numero >= 0) {
    return { numeroS: numero + 1 };
  } else {
    return { numeroS: numero - 1 };
  }
};

export const parteEnteraRaiz = (numero) => {
  if (numero >= 0) {
    let parteEntera = Math.floor(Math.sqrt(numero));
    return { parteEntera: parteEntera, isValid: true };
  } else {
    return { parteEntera: -1, isValid: false };
  }
};

export const numeroCifras = (numero) => {
  // Convertir el número a cadena y eliminar cualquier signo negativo con Math.abs
  const numeroAbsoluto = Math.abs(numero);
  const numeroString = numeroAbsoluto.toString();

  // Obtener la longitud de la cadena
  const numeroCifras = numeroString.length;

  // Devolver el número de cifras
  return { numeroC: numeroCifras };
};
