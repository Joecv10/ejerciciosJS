document.addEventListener("DOMContentLoaded", () => {
  let totalCaracteres = 0;
  let totalVocales = 0;
  let palabrasMenoresTres = 0;
  let cadenaTotal = "";
  const inputTextarea = document.getElementById("cadena");
  const resultadoParagraph = document.getElementById("resultado");
  const calcularButton = document.getElementById("calcular");
  const limpiarButton = document.getElementById("limpiar");
  const cadenaDesc = document.getElementById("cadena-desc");

  calcularButton.style.display = "none";

  function esVocal(c) {
    return "aeiouAEIOU".includes(c);
  }

  function contarVocales(cadena) {
    let count = 0;
    for (let c of cadena) {
      if (esVocal(c)) {
        count++;
      }
    }
    return count;
  }

  function validarYProcesarCadena() {
    const input = inputTextarea.value.trim();
    if (input === "") {
      cadenaDesc.textContent = "La cadena de texto no puede estar vacía.";
      cadenaDesc.style.color = "red";
      return;
    }

    if (input.length < 3) {
      palabrasMenoresTres++;
    } else {
      totalCaracteres += input.length;
      totalVocales += contarVocales(input);
      cadenaTotal += input;
    }

    cadenaDesc.style.color = "black";

    inputTextarea.value = "";

    if (totalVocales <= 50) {
      mostrarResultados();
      calcularButton.style.display = "block";
      cadenaDesc.style.color = "black";
    } else {
      calcularButton.style.display = "none";
      cadenaDesc.style.color = "red";
      cadenaDesc.textContent = "La cadena no puede tener mas de 50 vocales.";
    }
  }

  function mostrarResultados() {
    const resultado = `
      Número total de caracteres introducidos: ${totalCaracteres}<br>
      Número total de vocales introducidas: ${totalVocales}<br>
      Número de palabras menores de tres caracteres introducidas: ${palabrasMenoresTres}<br>
      Cadena total leída al revés: ${cadenaTotal.split("").reverse().join("")}
    `;
    resultadoParagraph.innerHTML = resultado;
  }

  function limpiarCampos() {
    totalCaracteres = 0;
    totalVocales = 0;
    palabrasMenoresTres = 0;
    cadenaTotal = "";
    inputTextarea.value = "";
    resultadoParagraph.innerHTML = "";
    cadenaDesc.textContent = "La cadena de texto no puede estar vacía.";
    cadenaDesc.style.color = "black";
    calcularButton.style.display = "none";
  }

  inputTextarea.addEventListener("input", () => {
    const input = inputTextarea.value.trim();
    if (input === "" || totalVocales >= 50) {
      cadenaDesc.style.color = "red";
      calcularButton.style.display = "none";
    } else {
      cadenaDesc.style.color = "black";
      calcularButton.style.display = "block";
    }
  });

  calcularButton.addEventListener("click", validarYProcesarCadena);
  limpiarButton.addEventListener("click", limpiarCampos);
});
