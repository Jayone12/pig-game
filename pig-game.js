'use strict';
let player1Arr = [];
let player2Arr = [];
let player1Total = [];
let player2Total = [];

const rollBtn = document.querySelector('.roll-dice-btn');
const holdBtn = document.querySelector('.hold-btn');
const p1CurrentScore = document.querySelector('.player-1 .player-current-score');
const p2CurrentScore = document.querySelector('.player-2 .player-current-score');
const p1totalScore = document.querySelector('.player-1 .player-total-score');
const p2totalScore = document.querySelector('.player-2 .player-total-score');
const playing = document.querySelector('.playing');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');


rollBtn.addEventListener("click", () => {
 dice(6);
 console.log(player1Arr);
 console.log(player2Arr);
});

holdBtn.addEventListener("click", () => {
  hold();
})

function dice(number) {
 let diceNumber = Math.floor(Math.random() * number) + 1;
 if (diceNumber !== 1) {
  if (player1.classList[1] === 'playing') {
   player1Arr.push(diceNumber);
   p1CurrentScore.innerHTML = player1Arr.reduce((acc, cur) => {
    return acc + cur;
   }, 0);
  } else if(player2.classList[1] === 'playing'){
   player2Arr.push(diceNumber);
   p2CurrentScore.innerHTML = player2Arr.reduce((acc, cur) => {
    return acc + cur;
   }, 0);
  }
 } else {
  player1Arr = [];
  player2Arr = [];
  p1CurrentScore.innerHTML = 0;
  p2CurrentScore.innerHTML = 0;
  alert(`주사위 숫자가 ${diceNumber} 입니다.`);
  hold();
 }
} 

function hold() {
 if (player1.classList[1] === 'playing') {
  player1Total.push(
   player1Arr.reduce((acc, cur) => {
    return acc + cur;
   }, 0)
  );
   p1totalScore.innerHTML = player1Total.reduce((acc, cur) => {
    return acc + cur;
   }, 0);
  p1CurrentScore.innerHTML = 0;
  
  } else if(player2.classList[1] === 'playing'){
   player2Total.push(
   player2Arr.reduce((acc, cur) => {
    return acc + cur;
   }, 0)
  );
   p2totalScore.innerHTML = player2Total.reduce((acc, cur) => {
    return acc + cur;
   }, 0);
  
   p2CurrentScore.innerHTML = 0;
 }

 if (p1totalScore.innerHTML >= 100) {
  alert(`player 1 winner`);
 } else if (p2totalScore.innerHTML >= 100) {
  alert(`player 2 winner`);
 };

 player1.classList.toggle('playing');
 if (player1.classList.toggle) {
  player2.classList.toggle('playing');
 }
  player1Arr = [];
  player2Arr = [];
  p1CurrentScore.innerHTML = 0;
  p2CurrentScore.innerHTML = 0;
};
