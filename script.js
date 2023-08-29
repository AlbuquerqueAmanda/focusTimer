const startingMinutes = 25;
const restMinutes = 5;
let timerTime = startingMinutes * 60;
let restTime = restMinutes * 60;
let isTimerPaused = true;
let isRestPaused = true;
let timerIntervalId;
let restIntervalId;

const counterEl = document.getElementById('counter');
const playButton = document.getElementById('play-bt');
const restButton = document.getElementById('rest-bt');

playButton.addEventListener('click', toggleTimer);
restButton.addEventListener('click', toggleRest);

function updateTimer() {
    if (!isTimerPaused) {
        const minutes = Math.floor(timerTime / 60);
        let seconds = timerTime % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        counterEl.innerHTML = `${minutes} : ${seconds}`;
        timerTime--;

        if (timerTime < 0) {
            clearInterval(timerIntervalId);
            counterEl.innerHTML = `Time's up!`;
        }
    }
}

function updateRest() {
    if (!isRestPaused) {
        const minutes = Math.floor(restTime / 60);
        let seconds = restTime % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        counterEl.innerHTML = `${minutes} : ${seconds}`;
        restTime--;

        if (restTime < 0) {
            clearInterval(restIntervalId);
            counterEl.innerHTML = `Rest time's up!`;
        }
    }
}

function toggleTimer() {
    if (isRestPaused) {
        if (isTimerPaused) {
            playButton.textContent = 'Pause';
            timerIntervalId = setInterval(updateTimer, 1000);
        } else {
            playButton.textContent = 'Timer';
            clearInterval(timerIntervalId);
        }
        isTimerPaused = !isTimerPaused;
    }
}

function toggleRest() {
    if (isTimerPaused) {
        if (isRestPaused) {
            restButton.textContent = 'Pause';
            restIntervalId = setInterval(updateRest, 1000);
        } else {
            restButton.textContent = 'Rest';
            clearInterval(restIntervalId);
        }
        isRestPaused = !isRestPaused;
    }
}
