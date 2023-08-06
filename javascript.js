// getComputerChoice function will return either rock, paper or scissors
// two parameters: playerSelection (should be case insensitive) and computerSelection
// winner of the round declares, "You Lose! Paper beats Rock"
// function should RETURN and not CONSOLE.LOG the result. 

// 1. define variables of rock, paper and scissors.
// 2. computerSelection chooses random variable of either rock, paper or else scissors. 
// 3. playerSelection receives input from player of a variable of rock, paper or scissors. 
// 4. function will determine which variable wins over the other variable. 
// 5. function will return the slogan "You Lose! Paper beats Rock", "You Lose! Rock beats Scissors" 
//or "You Lose! Scissors beats Paper"

function getRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function getComputerChoice() {
    let result;
    if (getRandom() <= 33) {
    result = "Rock";
    } else if (getRandom() > 33 && getRandom() <= 66) {
    result = "Paper";
    } else if (getRandom() > 66 && getRandom() <= 100) {
    result = "Scissors";
    }
  return result;
}
  console.log(getComputerChoice());

  //function playRound(playerSelection, computerSelection) {
    // your code here!
  //}

//function playerSelection() {}

//function computerSelection() {}