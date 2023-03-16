const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBackgroundColor);
stopBtn.addEventListener('click', stopChangeBackgroundColor);

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function changeBackgroundColor() {
    intervalId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function stopChangeBackgroundColor() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};
