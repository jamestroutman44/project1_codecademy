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

//var roundWinner[3] = [0,0,0]


function getRoundWinner(roundNumber){
  if (playerOneMoveOneType = ('rock') && playerTwoMoveOneValue = ('scissors')
     {roundWinner[roundNumber] = 'Player One'}
     else if (playerOneMoveOneType = ('rock') && playerTwoMoveOneValue = ('paper')
     {roundWinner[roundNumber] = ('Player Two')}
     else if (playerOneMoveOneType = ('paper') && playerTwoMoveOneValue = ('scissors')
     {roundWinner[roundNumber] = ('Player Two')}
     else if (playerOneMoveOneType = ('paper') && playerTwoMoveOneValue = ('rock')
     {roundWinner[roundNumber] = ('Player One')}
     else if (playerOneMoveOneType = ('scissors') && playerTwoMoveOneValue = ('paper')
     {roundWinner[roundNumber] = ('Player One')}
     else if (playerOneMoveOneType = ('scissors') && playerTwoMoveOneValue = ('rock')
     {roundWinner[roundNumber] = ('Player Two')}
     else if (playerOneMoveOneType === playerTwoMoveOneType)
        if (playerOneMoveOneValue > playerTwoMoveOneValue)
          {roundWinner[roundnumber] = ('Player One')}
          else {roundWinner[roundnumber] = ('Player Two')}
          }
}
