let currentTime = 0;
let timer;
let startBtn = document.querySelector(".start");
let clearBtn = document.querySelector(".clear");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let milliseconds = document.querySelector(".miliseconds");
startBtn.addEventListener("click", start);
clearBtn.addEventListener("click", clear);

function setDisplay() {
  minutes.textContent = Math.floor(currentTime / 60000)
    .toString()
    .padStart(2, "0");
  seconds.textContent = Math.floor((currentTime % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  milliseconds.textContent = currentTime % 1000;
}

function start() {
  timer = setInterval(() => {
    currentTime += 10;
    setDisplay();
  }, 10);
  startBtn.textContent = "Pause";
  startBtn.removeEventListener("click", start);
  startBtn.addEventListener("click", pause);
}

function pause(){
    clearInterval(timer);
    startBtn.textContent = "Start";
    startBtn.removeEventListener("click", pause);
    startBtn.addEventListener("click", start);
}
function clear(){
    clearInterval(timer);
    minutes.textContent="00";
    seconds.textContent="00";
    milliseconds.textContent="000";
}