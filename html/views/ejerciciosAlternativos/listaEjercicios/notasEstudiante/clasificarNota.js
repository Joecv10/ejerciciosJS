export const clasificarNota = (nota) => {
  let notaClasificada =
    nota <= 100 && nota >= 95
      ? { valor: "Excelente" }
      : nota < 95 && nota >= 90
      ? { valor: "Muy Bien" }
      : nota < 90 && nota >= 80
      ? { valor: "Bien" }
      : nota < 80 && nota >= 60
      ? { valor: "Regular" }
      : nota < 60 && nota >= 0
      ? { valor: "Insuficiente" }
      : { valor: "ND" };
  return notaClasificada;
};
