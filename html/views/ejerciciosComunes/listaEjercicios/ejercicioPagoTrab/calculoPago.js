export const calcularPagoBruto = (horasTrabajadas, tarifaHoraria) => {
  let pagaBruta = horasTrabajadas * tarifaHoraria;
  return { pagaBruta };
};

export const calcularImpuestos = (pagaBruta, tasaImpuestos) => {
  let impuestos = pagaBruta * tasaImpuestos;
  return { impuestos };
};

export const calcularPagaNeta = (pagaBruta, impuestos) => {
  let pagoNeto = pagaBruta - impuestos;
  return { pagoNeto };
};
