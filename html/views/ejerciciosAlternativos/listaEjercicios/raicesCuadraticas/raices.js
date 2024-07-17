export const calcularRaices = (a, b, c) => {
  let determinante = Math.pow(b, 2) - 4 * a * c;

  return determinante > 0
    ? {
        raiz1: (-b + Math.sqrt(determinante)) / (2 * a),
        raiz2: (-b - Math.sqrt(determinante)) / (2 * a),
      }
    : determinante === 0
    ? { raiz1: -b / (2 * a), raiz2: -b / (2 * a) }
    : {
        raiz1: `${-b / (2 * a)} + ${Math.sqrt(-1 * determinante) / (2 * a)} i`,
        raiz2: `${-b / (2 * a)} - ${Math.sqrt(-1 * determinante) / (2 * a)} i`,
      };
};
