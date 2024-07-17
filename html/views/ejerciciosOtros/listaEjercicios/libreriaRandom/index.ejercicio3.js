const numberDisplay = document.getElementById("number-display");
const spinButton = document.getElementById("spin-button");
const stopButton = document.getElementById("stop-button");
const winBanner = document.getElementById("win-banner");
const loseBanner = document.getElementById("lose-banner");
const fortuneMessage = document.getElementById("fortune-message");

let spinning = false;
let intervalId;

function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

async function fetchFortune() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("Error fetching fortune:", error);
    return "No se pudo obtener la fortuna. Inténtalo de nuevo.";
  }
}

function showBanner(isWinner) {
  winBanner.style.display = "none";
  loseBanner.style.display = "none";
  if (isWinner) {
    fetchFortune().then((fortune) => {
      fortuneMessage.textContent = fortune;
      winBanner.style.display = "block";
    });
  } else {
    loseBanner.style.display = "block";
  }
}

function startRoulette() {
  spinning = true;
  spinButton.disabled = true;
  stopButton.disabled = false;
  winBanner.style.display = "none";
  loseBanner.style.display = "none";
  numberDisplay.style.animation = "spin 0.5s linear infinite";
  intervalId = setInterval(() => {
    const randomNumber = getRandomNumber();
    numberDisplay.textContent = randomNumber;
  }, 100);
}

function stopRoulette() {
  if (spinning) {
    clearInterval(intervalId);
    numberDisplay.style.animation = "none";
    spinning = false;
    spinButton.disabled = false;
    stopButton.disabled = true;

    const finalNumber = parseInt(numberDisplay.textContent);
    if (isPrime(finalNumber)) {
      showBanner(true);
    } else {
      showBanner(false);
    }
  }
}

spinButton.addEventListener("click", startRoulette);
stopButton.addEventListener("click", stopRoulette);
