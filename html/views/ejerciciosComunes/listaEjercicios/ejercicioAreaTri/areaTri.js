export const calcularAreaTri = (lado1, lado2, lado3) => {
  // Semiperimetro
  let semiperimetro = (lado1 + lado2 + lado3) / 2;
  //   calcular area usando la formula de heron
  let areaTriangulo = Math.sqrt(
    semiperimetro *
      (semiperimetro - lado1) *
      (semiperimetro - lado2) *
      (semiperimetro - lado3)
  );
  return { area: areaTriangulo };
};
