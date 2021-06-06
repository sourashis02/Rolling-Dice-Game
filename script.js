'use strict';
const score0El = document.getElementById('score--0');
const cscore0El = document.getElementById('current--0');
const score1El = document.getElementById('score--1');
const btnhold = document.querySelector('.btn--hold');
const btn_NewGame = document.querySelector('.btn--new');
const cscore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const dicerl = document.querySelector('.btn--roll');
score0El.textContent = 0;
score1El.textContent = 0;
let cscore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;
diceEl.classList.add('hidden');
const switchPlayer = function () {
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    cscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
}
const rolldice = function () {
    if (playing) {
        const rn = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${rn}.png`;
        if (rn !== 1) {
            cscore += rn;
            document.getElementById(`current--${activePlayer}`).textContent = cscore;
        }
        else {
            switchPlayer();
        }
    }
}
dicerl.addEventListener('click', rolldice);
const dicehld = function () {
    if (playing) {
        score[activePlayer] += cscore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
            diceEl.classList.add('hidden');
        }
        else {
            switchPlayer();
        }
    }
}
btnhold.addEventListener('click', dicehld);
const newGame = function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    cscore = 0;
    score = [0, 0];
    activePlayer = 0;
    playing = true;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.querySelector('.player--0').classList.add('player--active');
}
btn_NewGame.addEventListener('click', newGame);
