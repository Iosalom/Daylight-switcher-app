'use strict';

const btnSwitch = document.getElementById('switch-btn');
const bodySwitch = document.querySelector('.body-black');
const moonSunSwitcher = document.querySelector('.moon-sun');
const headerSwitchEl = document.getElementById('h2-switch');
let locVar = false;

function turnBlack() {
  locVar = false;
  btnSwitch.className = 'dark-mode';
  moonSunSwitcher.className = 'fa-solid fa-moon';
  bodySwitch.className = 'body-black';
  headerSwitchEl.className = 'h2-dark';
}
function turnWhite() {
  locVar = true;
  btnSwitch.className = 'white-mode';
  moonSunSwitcher.className = 'fa-solid fa-sun';
  bodySwitch.className = 'body-white';
  headerSwitchEl.className = 'h2-white';
}

btnSwitch.addEventListener('click', function () {
  if (locVar == false) {
    turnWhite();
  } else if (locVar == true) {
    turnBlack();
  }
});
