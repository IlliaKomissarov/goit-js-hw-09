
const startButton = document.querySelector('button.data-start');
const stopButton = document.querySelector('button.data-stop');
const bodyElement = document.querySelector('body');
const DELAY = 1000;
let timeoutId = null;

startButton.addEventListener('click', startChangingBackground);

function startChangingBackground() {
  startButton.setAttribute('disabled', 'disabled');
  stopButton.removeAttribute('disabled');
  timeoutId = setInterval(() => {
    const colorName = getRandomHexColor();
    bodyElem.style.backgroundColor = colorName;
  }, DELAY);
}