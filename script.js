const timerDisplay = document.getElementById('timer-display');
const workButton = document.getElementById('work-button');
const shortBreakButton = document.getElementById('short-break-button');
const longBreakButton = document.getElementById('long-break-button');
const startStopButton = document.getElementById('start-stop-button');
const timerImage = document.getElementById('timer-image')

let timeInSeconds;
let intervalID;
let isRunning = false;

function defaultSettings() {
    timerDisplay.innerText = '00:00';
    timerImage.innerHTML = '<img src="assets/tomato_sleep.gif"/>';
    startStopButton.innerText = 'Start'
    isRunning = false;
    clearInterval(intervalID);
}

function formatTime(minutes, seconds) {
    return `${minutes}:${seconds}`;
}

function updateStartTime() {
    workButton.addEventListener('click', (e) => {
        timeInSeconds = 1500;
        defaultSettings();

        e.preventDefault();
        timerDisplay.innerText = `${formatTime('25', '00')}`;
    });

    shortBreakButton.addEventListener('click', (e) => {
        timeInSeconds = 300;
        defaultSettings();

        e.preventDefault();
        timerDisplay.innerText = `${formatTime('5', '00')}`;
    });

    longBreakButton.addEventListener('click', (e) => {
        timeInSeconds = 900;
        defaultSettings();

        e.preventDefault();
        timerDisplay.innerText = `${formatTime('15', '00')}`;
    });
}

function updateTimer() {
    if (timeInSeconds < 0) {
        defaultSettings();
        return;
    }

    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60;

    secs = secs < 10 ? '0' + secs : secs;

    timerDisplay.innerText = `${formatTime(mins, secs)}`;
    timeInSeconds--;
}

function startTimer() {
    startStopButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (timeInSeconds == null) {
            return;
        } else if (isRunning == false) {
            intervalID = setInterval(updateTimer, 1000);
            timerImage.innerHTML = '<img src="assets/tomato.gif"/>'
            startStopButton.innerText = 'Reset'
            isRunning = true;
            return;
        } else if (isRunning == true) {
            timeInSeconds = null; 
            defaultSettings();
            clearInterval(intervalID);
            return;
        }
    })
}

defaultSettings();
updateStartTime();
startTimer();