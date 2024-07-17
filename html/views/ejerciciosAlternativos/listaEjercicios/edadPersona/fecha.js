export const setFechaActual = (inputFecha, idFecha, minFecha) => {
  inputFecha = document.getElementById(idFecha);

  // Obtener la fecha actual
  const hoy = new Date();
  const dia = hoy.getDate().toString().padStart(2, "0");
  const mes = (hoy.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0
  const anio = hoy.getFullYear();
  const fechaActual = `${anio}-${mes}-${dia}`;

  // Establecer la fecha máxima como la fecha actual
  inputFecha.setAttribute("max", fechaActual);

  // Opcional: establecer una fecha mínima (por ejemplo, el 1 de enero de 2000)
  const fechaMinima = minFecha;
  inputFecha.setAttribute("min", fechaMinima);
};

export const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return { edad };
};

export const validarFecha = (inputFechaNac, descFechaNac) => {
  const valorFechaNacimiento = inputFechaNac.value;
  const warning = descFechaNac;
  const hoy = new Date();
  const inputDate = new Date(valorFechaNacimiento);
  console.log("input date: ", inputDate);
  console.log("hoy: ", hoy);
  console.log("inputDate.getFullYear():", inputDate.getFullYear());

  //   if (
  //     inputDate.getFullYear() > hoy.getFullYear() ||
  //     inputDate.getFullYear() < 1900 ||
  //     valorFechaNacimiento.value === ""
  //   ) {
  //     warning.style.color = "red";
  //     return false;
  //   } else {
  //     warning.style.color = "#727272";
  //     return true;
  //   }

  if (
    inputDate.getFullYear() > hoy.getFullYear() ||
    (inputDate.getFullYear() === hoy.getFullYear() &&
      inputDate.getMonth() > hoy.getMonth()) ||
    (inputDate.getFullYear() === hoy.getFullYear() &&
      inputDate.getMonth() === hoy.getMonth() &&
      inputDate.getDate() >= hoy.getDate()) ||
    inputDate.getFullYear() + 1 < 1900 ||
    valorFechaNacimiento === ""
  ) {
    warning.style.color = "red";
    return false;
  } else {
    warning.style.color = "#727272";
    return true;
  }
};
