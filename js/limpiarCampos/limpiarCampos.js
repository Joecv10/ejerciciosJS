//Limpiar Input Text
export const limpiarInputText = (inputId) => {
  //Limpiar input text
  document.getElementById(inputId).value = "";
};

//Limpiar p tag
export const limpiarPtag = (pTagId) => {
  document.getElementById(pTagId).textContent = "";
};
