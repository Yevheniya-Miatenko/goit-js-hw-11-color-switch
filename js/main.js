import colors from './colors.js';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isChangingColor = false;
let intervalId = null;
let currentColor = 0;
let newColor = 0;

refs.startBtn.addEventListener('click', turnSwitcherOn);

refs.stopBtn.addEventListener('click', turnSwitcherOff);

function turnSwitcherOn() {
  if (isChangingColor) {
    return;
  }
  isChangingColor = true;
  refs.startBtn.disabled = true;

  refs.startBtn.classList.add('no-active');

  intervalId = setInterval(switchColor, 1000);
}

function turnSwitcherOff() {
  clearInterval(intervalId);
  isChangingColor = false;
  refs.startBtn.disabled = false;

  refs.startBtn.classList.remove('no-active');
}

function switchColor() {
  do {
    newColor = randomIntegerFromInterval(0, colors.length - 1);
  } while (newColor === currentColor);
  currentColor = newColor;

  document.body.style.backgroundColor = colors[newColor];
}
