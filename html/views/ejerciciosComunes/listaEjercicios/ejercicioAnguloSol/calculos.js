export const calcularAnguloIncidencia = (alturaPoste, longSombra) => {
  // Angulo en radianes
  let anguloRadianes = Math.atan(alturaPoste / longSombra);
  //   Angulo en grados
  let anguloGrados = anguloRadianes * (180 / Math.PI);
  //   Transformacion a grados, mins y secs
  let grados = Math.floor(anguloGrados);

  let minsDecimales = (anguloGrados - grados) * 60;
  let mins = Math.floor(minsDecimales);

  let secs = Math.floor((minsDecimales - mins) * 60);

  return { grados: grados, minutos: mins, segundos: secs };
};
