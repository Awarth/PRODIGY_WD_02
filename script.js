const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const milliseconds = document.getElementById("ms");
let running = false;
let startTime;

document.getElementById("start").addEventListener("click", startWatch);
document.getElementById("reset").addEventListener("click", resetWatch);
document.getElementById("stop").addEventListener("click", stopWatch);

function startWatch() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    updateTime();
  }
}

function resetWatch() {
  stopWatch();
  minutes.textContent = "00";
  seconds.textContent = "00";
  milliseconds.textContent = "00";
}

function stopWatch() {
  running = false;
}

function updateTime() {
  if (running) {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let min = Math.floor(elapsedTime / 60000);
    let sec = Math.floor((elapsedTime % 60000) / 1000);
    let ms = Math.floor((elapsedTime % 1000)/10);

    minutes.textContent = min < 10 ? "0" + min : min;
    seconds.textContent = sec < 10 ? "0" + sec : sec;
    milliseconds.textContent = ms < 10 ? "0" + ms : ms;

    setTimeout(updateTime, 10);
  }
}
