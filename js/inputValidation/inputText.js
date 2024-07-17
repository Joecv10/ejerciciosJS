export const isValidInput = (isValid, descSmall) => {
  if (isValid) {
    descSmall.style.color = "#727272";
  } else {
    descSmall.style.color = "red";
  }
};

export const hasText = (inputField, buttonLimpiar) => {
  // Mostrar el botón "Limpiar Campos" si hay algún valor
  if (inputField.value.trim() !== "") {
    buttonLimpiar.style.display = "inline-block";
  } else {
    buttonLimpiar.style.display = "none";
  }
};
