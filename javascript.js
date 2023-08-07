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

function getPlayerSelection() {
    let choice = prompt("Please enter Rock, Paper or Scissors", "Rock");
    return choice;
  }
  
  function playRound(playerSelection, computerSelection) {
     let result; 
     if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You Lose! Paper covers Rock!";
     } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You Lose! Scissors cuts Paper!";
     } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You Lose! Rock smashes Scissors!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "You Win! Rock smashes Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        result = "You Win! Paper covers Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "You Win! Scissors cuts Paper!";
    } else if (playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Rock" && computerSelection === "Rock" ||playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = "Whoops! A Draw! Please try again!";
    }
    return result;
  }

  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));