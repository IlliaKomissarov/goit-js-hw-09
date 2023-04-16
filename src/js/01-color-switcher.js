const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyElem = document.querySelector('body');
const DELAY = 1000;
let timeoutId = null;

stopButton.setAttribute('disabled', 'disabled');

startButton.addEventListener('click', startChangingBackground);
stopButton.addEventListener('click', stopChangingBackground);

function startChangingBackground() {
  startButton.setAttribute('disabled', 'disabled');
  stopButton.removeAttribute('disabled');
  timeoutId = setInterval(() => {
    const colorName = getRandomHexColor();
    bodyElem.style.backgroundColor = colorName;
  }, DELAY);
}

function stopChangingBackground() {
  stopButton.setAttribute('disabled', 'disabled');
  startButton.removeAttribute('disabled');
  clearInterval(timeoutId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}