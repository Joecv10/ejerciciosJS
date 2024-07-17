export const determinarSigno = (numero) => {
  const signo =
    numero > 0
      ? { signo: true }
      : numero < 0
      ? { signo: false }
      : { signo: "No" };
  return signo;
};

export const determinarImpar = (numero) => {
  const impar = numero % 2 === 0 ? { impar: false } : { impar: true };
  return impar;
};

export const determinarMultiploCinco = (numero) => {
  const multiploCinco =
    numero % 5 === 0 ? { multiploCinco: true } : { multiploCinco: false };
  return multiploCinco;
};

export const esMenorCien = (numero) => {
  const esMenor = numero < 100 ? { esMenor: true } : { esMenor: false };
  return esMenor;
};
