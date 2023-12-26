const minutesEl = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const millesecondsEl = document.getElementById("milliseconds");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const resetButton = document.getElementById("resetButton");

let interval;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPause = false;

// Adicionando eventos aos clicks
startButton.addEventListener("click", startTime);
pauseButton.addEventListener("click", pauseTime);
resumeButton.addEventListener("click", resumeTime);
resetButton.addEventListener("click", resetTime);

// Função para iniciar o cronômetro
function startTime() {
  interval = setInterval(() => {
    if (!isPause) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEL.textContent = formatTime(seconds);
      millesecondsEl.textContent = formatMilliseconds(milliseconds);
    }
  }, 10);

  startButton.style.display = "none";
  pauseButton.style.display = "block";
}

// Função para pausar o tempo
function pauseTime() {
  isPause = true;
  pauseButton.style.display = "none";
  resumeButton.style.display = "block";
}
// Função para continuar
function resumeTime() {
  isPause = false;
  resumeButton.style.display = "none";
  pauseButton.style.display = "block";
}

// Função para resetar o cronômetro
function resetTime() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesEl.textContent = "00";
  secondsEL.textContent = "00";
  millesecondsEl.textContent = "000";

  startButton.style.display = "block";
  pauseButton.style.display = "none";
  resumeButton.style.display = "none";
}

// Funções para formatar os modelos dos números na tela

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
