"use strict";

let currentScore = 0;

const dice = Math.trunc(Math.random() * 6) + 1;

if (dice !== 1) {
  currentScore += dice;
} else {
  currentScore = 0;
}
