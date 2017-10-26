// All code should be written in this file.

var playerOneMoveOneType = undefined
var playerOneMoveTwoType = undefined
var playerOneMoveThreeType = undefined
var playerOneMoveOneValue = undefined
var playerOneMoveTwoValue = undefined
var playerOneMoveThreeValue = undefined

var playerTwoMoveOneType = undefined
var playerTwoMoveTwoType = undefined
var playerTwoMoveThreeType = undefined
var playerTwoMoveOneValue = undefined
var playerTwoMoveTwoValue = undefined
var playerTwoMoveThreeValue = undefined

function isValidMove(moveType) {
  if (moveType === 'rock' || moveType === 'paper' || moveType === 'scissors')
  {return true} else {return false}
  }


function isValidValue(moveValue) {
  if (moveValue < 98 && typeof moveValue === 'number' && moveValue > 1 ) {
  return true
  } else {return false}
  }

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  var moveValueSum = moveOneValue + moveTwoValue + moveThreeValue
    if ( isValidMove(moveOneType) && isValidMove(moveTwoType) && isValidMove(moveThreeType) && moveValueSum <=99) {
      if (isValidValue(moveOneValue) && isValidValue(moveTwoValue) && isValidValue(moveThreeValue)) {
        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
          } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
          } else { console.log('Invalid Player Number'); }
        } else { console.log('Invalid Value'); }
     } else { console.log('Invalid Move Type'); }
}

function getRoundWinner(roundNumber) {
  switch(roundNumber) {
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                           playerOneMoveOneValue,
                           playerTwoMoveOneType,
                           playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                           playerOneMoveTwoValue,
                           playerTwoMoveTwoType,
                           playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                           playerOneMoveThreeValue,
                           playerTwoMoveThreeType,
                           playerTwoMoveThreeValue);
    default:
      return null;
  }
}

  function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
                         playerTwoMoveValue) {
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
        !playerTwoMoveValue) {
      return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
      if (playerOneMoveValue > playerTwoMoveValue) {
        return 'Player One';
      } else if (playerOneMoveValue < playerTwoMoveValue) {
        return 'Player Two';
      } else {
        return 'Tie';
      }
    }
    if (playerOneMoveType === 'rock') {
      if (playerTwoMoveType === 'scissors') {
        return 'Player One';
      } else {
        return 'Player Two';
      }
    } else if (playerOneMoveType === 'paper') {
      if (playerTwoMoveType === 'rock') {
        return 'Player One';
      } else {
        return 'Player Two';
      }
    } else {
      if (playerTwoMoveType === 'paper') {
        return 'Player One';
      } else {
        return 'Player Two';
      }
    }
  }

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }
    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);
    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}

function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
}

function setComputerMoves() {
    const moves = ['rock', 'paper', 'scissors'];
    const moveOneType = moves[Math.floor(Math.random() * 3)];
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() *3)];
    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
}
