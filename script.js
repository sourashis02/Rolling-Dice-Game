'use strict';
const score0El = document.getElementById('score--0');
const cscore0El = document.getElementById('current--0');
const score1El = document.getElementById('score--1');
const cscore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const dicerl = document.querySelector('.btn--roll');
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const rolldice = function () {
    const rn = Math.trunc(Math.random() * 6) + 1;
    let cscore = cscore + rn;
    cscore0El.textContent = cscore;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rn}.png`;
}
dicerl.addEventListener('click', rolldice);
