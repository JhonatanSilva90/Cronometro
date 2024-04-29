// Criando os elementos HTML de forma dinâmica via JavaScript.
// Criando a div container
let containerDiv = document.createElement("div");
containerDiv.classList.add("container");

// Criando o título h1 com a imagem
let titleH1 = document.createElement("h1");
let image = document.createElement("img");
image.src = "./src/cronometro-3.png";
image.alt = "imagem de um Cronômetro";
titleH1.appendChild(image);
titleH1.appendChild(document.createTextNode("Cronômetro"));

// Criando a div timer
let timerDiv = document.createElement("div");
timerDiv.classList.add("timer");

// Criando os elementos para exibir o tempo
let minutesDiv = document.createElement("div");
minutesDiv.classList.add("time");
minutesDiv.id = "minutes";
minutesDiv.textContent = "00";

let separator1 = document.createElement("div");
separator1.classList.add("separator");
separator1.textContent = ":";

let secondsDiv = document.createElement("div");
secondsDiv.classList.add("time");
secondsDiv.id = "seconds";
secondsDiv.textContent = "00";

let separator2 = document.createElement("div");
separator2.classList.add("separator");
separator2.textContent = ":";

let millisecondsDiv = document.createElement("div");
millisecondsDiv.classList.add("time");
millisecondsDiv.id = "milliseconds";
millisecondsDiv.textContent = "000";

// Adicionando elementos ao div timer
timerDiv.appendChild(minutesDiv);
timerDiv.appendChild(separator1);
timerDiv.appendChild(secondsDiv);
timerDiv.appendChild(separator2);
timerDiv.appendChild(millisecondsDiv);

// Criando a div buttons
let buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons");

// Criando os botões
let startButton = document.createElement("button");
startButton.classList.add("button");
startButton.id = "startButton";
startButton.textContent = "Iniciar";

let pauseButton = document.createElement("button");
pauseButton.classList.add("button");
pauseButton.id = "pauseButton";
pauseButton.textContent = "Pausar";

let resumeButton = document.createElement("button");
resumeButton.classList.add("button");
resumeButton.id = "resumeButton";
resumeButton.textContent = "Continuar";

let resetButton = document.createElement("button");
resetButton.classList.add("button");
resetButton.id = "resetButton";
resetButton.textContent = "Resetar";

// Adicionando botões a div buttons
buttonsDiv.appendChild(startButton);
buttonsDiv.appendChild(pauseButton);
buttonsDiv.appendChild(resumeButton);
buttonsDiv.appendChild(resetButton);

// Adicionando todos os elementos criados a div container
containerDiv.appendChild(titleH1);
containerDiv.appendChild(timerDiv);
containerDiv.appendChild(buttonsDiv);

// Adicionando a div container ao corpo do documento
document.body.appendChild(containerDiv);

const minutesEl = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const millesecondsEl = document.getElementById("milliseconds");

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
