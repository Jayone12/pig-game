"use strict";

let currentScore = 0;
const dice = Math.trunc(Math.random() * 6) + 1;

function rollDice() {
  if (dice !== 1) {
    currentScore += dice;
  } else {
    currentScore = 0;
  }
  return dice;
}

rollDice(dice);
console.log(currentScore);
