// index.ejercicio2.js

document.addEventListener("DOMContentLoaded", () => {
  const inputOracion = document.getElementById("numero");
  const buttonCalcular = document.getElementById("calcular");
  const buttonLimpiar = document.getElementById("limpiar");
  const resultado = document.getElementById("resultado");
  const smallDesc = document.getElementById("numero-desc");

  // Función para contar letras en una oración
  const contarLetras = (oracion) => {
    const conteoLetras = {};
    const letras = oracion.replace(/\s/g, "").toUpperCase(); // Elimina espacios y convierte a mayúsculas

    for (let letra of letras) {
      conteoLetras[letra] = (conteoLetras[letra] || 0) + 1;
    }

    return conteoLetras;
  };

  // Función para actualizar el estado de los botones y el mensaje de error
  const actualizarEstado = () => {
    const oracion = inputOracion.value.trim();
    const tieneTexto = oracion.length > 0;

    buttonCalcular.style.display = tieneTexto ? "inline-block" : "none";
    buttonLimpiar.style.display = tieneTexto ? "inline-block" : "none";
    smallDesc.style.color = tieneTexto ? "initial" : "red";
  };

  // Mostrar resultados
  buttonCalcular.addEventListener("click", () => {
    const oracion = inputOracion.value.trim();
    if (oracion.length === 0) {
      smallDesc.style.color = "red";
      return;
    }

    const conteo = contarLetras(oracion);
    resultado.innerHTML = ""; // Limpiar resultados previos

    for (let letra in conteo) {
      const line = document.createElement("p");
      line.textContent = `${letra} ${conteo[letra]}`;
      resultado.appendChild(line);
    }
  });

  // Limpiar campos
  buttonLimpiar.addEventListener("click", () => {
    inputOracion.value = "";
    resultado.innerHTML = "";
    actualizarEstado();
  });

  // Actualizar estado al cambiar el contenido del input
  inputOracion.addEventListener("input", actualizarEstado);

  // Inicializar estado
  actualizarEstado();
});
