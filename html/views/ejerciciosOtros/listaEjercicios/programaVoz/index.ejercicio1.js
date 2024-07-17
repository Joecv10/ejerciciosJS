// index.ejercicio1.js

document.addEventListener("DOMContentLoaded", () => {
  const buttonHablar = document.getElementById("calcular");
  const buttonLimpiar = document.getElementById("limpiar");
  const textArea = document.getElementById("cadena");
  const resultado = document.getElementById("resultado");

  // Verifica si el navegador soporta la API de reconocimiento de voz
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Tu navegador no soporta la API de reconocimiento de voz");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Para seguir escuchando después de cada resultado
  recognition.interimResults = true; // Para obtener resultados provisionales

  recognition.onresult = (event) => {
    let interimTranscript = "";
    let finalTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    textArea.value = finalTranscript + interimTranscript;
    resultado.textContent = finalTranscript;
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error detected: " + event.error);
    switch (event.error) {
      case "no-speech":
        alert(
          "No se detectó ninguna entrada de voz. Por favor, intenta nuevamente."
        );
        break;
      case "audio-capture":
        alert(
          "No se detectó el micrófono. Asegúrate de que tu micrófono esté conectado y funcionando."
        );
        break;
      case "not-allowed":
        alert(
          "Permiso para usar el micrófono denegado. Asegúrate de otorgar permisos en tu navegador."
        );
        break;
      default:
        alert("Ocurrió un error en el reconocimiento de voz: " + event.error);
        break;
    }
  };

  recognition.onaudiostart = () => {
    console.log("Audio capturing started");
    buttonHablar.textContent = "Escuchando...";
  };

  recognition.onaudioend = () => {
    console.log("Audio capturing ended");
    buttonHablar.textContent = "Hablar";
  };

  buttonHablar.addEventListener("click", () => {
    recognition.start();
  });

  buttonLimpiar.addEventListener("click", () => {
    textArea.value = "";
    resultado.textContent = "";
    recognition.stop();
  });
});
