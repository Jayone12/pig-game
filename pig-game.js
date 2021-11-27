"use strict";

/**
 * --------------------
 *    Roll Dice Game
 * --------------------
 */
const rollDice = {
  'dice' : document.querySelector('.dice'),                   // 주사위
  'diceNum' : document.querySelector('.dice .num'),           // 주사위 값을 보여줄 요소
  'winnerScoreEl' : document.querySelector('.winner-score'),  // 승리할 최종 값을 받을 input
  'turn' : 1,                                                 // 누구 턴인지 확인
  'btns' : {
    'roll' : document.querySelector('.btn-roll'),             // Roll Dice Button
    'hold' : document.querySelector('.btn-hold'),             // Hold Button
  },
  'player' : {                                                // 플래이어 점수 담을 객체
    1:{
      'total' : document.querySelector('.player1 .total-score .num'),
      'current' : document.querySelector('.player1 .current-score .num'),
    },
    2:{
      'total' : document.querySelector('.player2 .total-score .num'),
      'current' : document.querySelector('.player2 .current-score .num'),
    },
  }
};

// dice roll event
rollDice.btns.roll.addEventListener('click', function(){
  const rollResult = Math.floor(Math.random() * 6)  // 랜덤 주사위 값을 반환 받을 함수 필요
  rollDice.winnerScoreEl.disabled = true
  rollDice.diceNum.textContent = rollResult
  if (rollResult == 0) {
    rollDice.dice.classList.add('oops')
    setTimeout(function(){
      rollDice.dice.classList.remove('oops')
    }, 1000)
    turnChange()
  }
  rollDice.player[rollDice.turn].current.textContent = Number(rollDice.player[rollDice.turn].current.textContent) + rollResult;
});

// dice hold Event
rollDice.btns.hold.addEventListener('click', function(){
  winnerCheck(rollDice.player[rollDice.turn].current.textContent)
  turnChange()
});

function turnChange(num){
  let playerPanels = document.querySelectorAll('[class^="player"]')
  for (let i = 0; i < playerPanels.length; i++) {
    playerPanels[i].classList.remove('turn')
  }
  rollDice.player[rollDice.turn].current.textContent = 0

  if (num === undefined) {
    rollDice.turn === 1 ? rollDice.turn = 2 : rollDice.turn = 1
  } else {
    rollDice.turn = num
  }
  document.querySelector('.player' + rollDice.turn).classList.add('turn')
}

function winnerCheck(totalScore){
  if (totalScore >= Number(rollDice.winnerScoreEl.value)) {
    document.querySelector('.player' + rollDice.turn).querySelector('.name').textContent += ' - WINNER !!!'
  }
}