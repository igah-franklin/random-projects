'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currenScore0El = document.querySelector('.current--0').textContent;
const currenScore1El = document.querySelector('.current--1').textContent;

// currenScore0El.textContent = 0;
// currenScore1El.textContent = 0;

//buttons
const resetGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.Hold');
let dice = document.querySelector('.dice');
dice.classList.add('hidden');

rollDice.addEventListener('click', function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNum}.png`;
  dice.classList.remove('hidden');
  currenScore0El += randomNum;
});
