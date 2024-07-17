export const calcularCostoAlquiler = (kilometros) => {
  const tarifaBase = 300000;
  const tarifaAdicional1 = 15000; // por km extra sobre 300 y hasta 1000
  const tarifaAdicional2 = 10000; // por km extra sobre 1000
  const IVA = 0.2;

  let costoTotal = 0;

  if (kilometros <= 300) {
    costoTotal = tarifaBase;
  } else if (kilometros > 300 && kilometros <= 1000) {
    costoTotal = tarifaBase + (kilometros - 300) * tarifaAdicional1;
  } else {
    costoTotal =
      tarifaBase +
      700 * tarifaAdicional1 +
      (kilometros - 1000) * tarifaAdicional2;
  }

  const montoSinIVA = costoTotal / (1 + IVA);
  const montoIVA = costoTotal - montoSinIVA;

  return {
    costoTotal,
    montoSinIVA,
    montoIVA,
  };
};
