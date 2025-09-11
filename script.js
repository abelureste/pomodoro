let timer;
let totalSeconds;
let isRunning = false;

const workTime = 25 * 60;
const shortBreakTime = 5 * 60;
const longBreakTime = 15 * 60;

let currentModeTime = workTime;
totalSeconds = currentModeTime;

const timerDisplay = document.getElementById('timer-display');
const workButton = document.getElementById('work-button');
const shortBreakButton = document.getElementById('short-break-button');
const longBreakButton = document.getElementById('long-break-button');
const startStopButton = document.getElementById('start-stop-button');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const seconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderTime() {
    timerDisplay.textContent = formatTime(totalSeconds);
}

function updateTimer() {
    if (totalSeconds > 0) {
        totalSeconds--;
        renderTime();
    } else {
        clearInterval(timer)
    }
}