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
    result = "rock";
    } else if (getRandom() > 33 && getRandom() <= 66) {
    result = "paper";
    } else if (getRandom() > 66 && getRandom() <= 100) {
    result = "scissors";
    }
  return result;
}

function getPlayerSelection() {
    let choice = prompt("Please enter Rock, Paper or Scissors", "Rock");
    return choice.toLowerCase();
  }
  
  function playRound(playerSelection, computerSelection) {
     let result; 
     if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper covers Rock!";
     } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors cuts Paper!";
     } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock smashes Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win! Rock smashes Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "You Win! Paper covers Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors cuts Paper!";
    } else if (playerSelection === "paper" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors") {
        result = "Whoops! A Draw! Please try again!";
    }
    return result;
  }

  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();

  // 1. write a function called "game()".
  // 2. use playRound(); inside of it 5x times. 
  // 3. after each round, if you win than the result is +1 score to playerScore/computerScore. 
  // Else if you loose it's +1 to computerScore, or else if you draw no one gets any points.  
  // 4. After the fifth round, return a winner based on the number of round wins.
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result; 
    playRound();
    if (playRound() === "You Win! Rock smashes Scissors!" || "You Win! Paper covers Rock!" || "You Win! Scissors cuts Paper!") {
        result = playerScore = +1;
    } else if (playRound() === "You Lose! Paper covers Rock!" || "You Lose! Scissors cuts Paper!" || "You Lose! Rock smashes Scissors!") {
        result = computerScore = +1; 
    } else if (playRound() === "Whoops! A Draw! Please try again!") {
        result = playerScore = 0, computerScore = 0;
    }
    console.log(result)

    playRound();
    if (playRound() === "You Win! Rock smashes Scissors!" || "You Win! Paper covers Rock!" || "You Win! Scissors cuts Paper!") {
        result = playerScore = +1;
    } else if (playRound() === "You Lose! Paper covers Rock!" || "You Lose! Scissors cuts Paper!" || "You Lose! Rock smashes Scissors!") {
        result = computerScore = +1; 
    } else if (playRound() === "Whoops! A Draw! Please try again!") {
        result = playerScore = 0, computerScore = 0;
    }
    console.log(result)

    playRound();
    if (playRound() === "You Win! Rock smashes Scissors!" || "You Win! Paper covers Rock!" || "You Win! Scissors cuts Paper!") {
        result = playerScore = +1;
    } else if (playRound() === "You Lose! Paper covers Rock!" || "You Lose! Scissors cuts Paper!" || "You Lose! Rock smashes Scissors!") {
        result = computerScore = +1; 
    } else if (playRound() === "Whoops! A Draw! Please try again!") {
        result = playerScore = 0, computerScore = 0;
    }
    console.log(result)

    playRound();
    if (playRound() === "You Win! Rock smashes Scissors!" || "You Win! Paper covers Rock!" || "You Win! Scissors cuts Paper!") {
        result = playerScore = +1;
    } else if (playRound() === "You Lose! Paper covers Rock!" || "You Lose! Scissors cuts Paper!" || "You Lose! Rock smashes Scissors!") {
        result = computerScore = +1; 
    } else if (playRound() === "Whoops! A Draw! Please try again!") {
        result = playerScore = 0, computerScore = 0;
    }
    console.log(result)

    playRound();
    if (playRound() === "You Win! Rock smashes Scissors!" || "You Win! Paper covers Rock!" || "You Win! Scissors cuts Paper!") {
        result = playerScore = +1;
    } else if (playRound() === "You Lose! Paper covers Rock!" || "You Lose! Scissors cuts Paper!" || "You Lose! Rock smashes Scissors!") {
        result = computerScore = +1; 
    } else if (playRound() === "Whoops! A Draw! Please try again!") {
        result = playerScore = 0, computerScore = 0;
    }
    console.log(result)
  }
  //function finalScore() {
    //let result;
    //if (game.result = 3) {
       //result = alert("Congratulations! You won the game!")
    //} else if (game.result < 3) {
       // result = alert("Boo, you suck. Try Again!")
//    }
 //   return result;
//  }