export function findNumbers() {
  let pairs = [];

  for (let i = 10; i <= 99; i++) {
    for (let j = 10; j <= 99; j++) {
      // Calculamos el producto de los números i y j
      let product1 = i * j;

      // Convertimos i y j a cadenas y permutamos los dígitos
      let strI = i.toString().split("").reverse().join("");
      let strJ = j.toString().split("").reverse().join("");

      // Convertimos las cadenas permutadas de nuevo a números
      let permutedI = parseInt(strI);
      let permutedJ = parseInt(strJ);

      // Calculamos el producto de los números permutados
      let product2 = permutedI * permutedJ;

      // Verificamos si ambos productos son iguales
      if (product1 === product2 && i < j) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}
