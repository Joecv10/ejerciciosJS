export const calcularTasaInteres = (capInicial, tasaInteres, anios) => {
  let tasaI = tasaInteres / 100;
  let interesSimple = capInicial * (1 + tasaI * anios);
  return { interesSimple };
};
