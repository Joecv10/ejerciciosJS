export function generarSerieFibonacci(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  let serie = [0, 1];
  for (let i = 2; i < n; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie;
}
