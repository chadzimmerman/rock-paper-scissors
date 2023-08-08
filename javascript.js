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
    let randomNumber = getRandom();
    if (randomNumber <= 33) {
    result = "rock";
    } else if (randomNumber > 33 && randomNumber <= 66) {
    result = "paper";
    } else if (randomNumber > 66 && randomNumber <= 100) {
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
     console.log("     PLAYER: "+ playerSelection+" COMPUTER: "+computerSelection);
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
    console.log(result);
    return result;
  }

  // 1. write a function called "game()".
  // 2. use playRound(); inside of it 5x times. 
  // 3. after each round, if you win than the result is +1 score to playerScore/computerScore. 
  // Else if you loose it's +1 to computerScore, or else if you draw no one gets any points.  
  // 4. After the fifth round, return a winner based on the number of round wins.
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);

    if (result === "You Win! Rock smashes Scissors!" || result === "You Win! Paper covers Rock!" || result === "You Win! Scissors cuts Paper!") {
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" || result === "You Lose! Scissors cuts Paper!" || result === "You Lose! Rock smashes Scissors!") {
        result = ++computerScore; 
    }
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);
    if (result === "You Win! Rock smashes Scissors!" || result === "You Win! Paper covers Rock!" || result === "You Win! Scissors cuts Paper!") {
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" || result === "You Lose! Scissors cuts Paper!" || result === "You Lose! Rock smashes Scissors!") {
        result = ++computerScore; 
    }
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);
    if (result === "You Win! Rock smashes Scissors!" || result === "You Win! Paper covers Rock!" || result === "You Win! Scissors cuts Paper!") {
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" || result === "You Lose! Scissors cuts Paper!" || result === "You Lose! Rock smashes Scissors!") {
        result = ++computerScore; 
    }
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);
    if (result === "You Win! Rock smashes Scissors!" || result === "You Win! Paper covers Rock!" || result === "You Win! Scissors cuts Paper!") {
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" || result === "You Lose! Scissors cuts Paper!" || result === "You Lose! Rock smashes Scissors!") {
        result = ++computerScore; 
    }
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);
    if (result === "You Win! Rock smashes Scissors!" || result === "You Win! Paper covers Rock!" || result === "You Win! Scissors cuts Paper!") {
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" || result === "You Lose! Scissors cuts Paper!" || result === "You Lose! Rock smashes Scissors!") {
        result = ++computerScore; 
    }
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    if (playerScore > computerScore) {
        alert("You Win The Game!")
    } else if (playerScore < computerScore) {
        alert("Sorry, You Suck! You Lost The Game!")
    } else if (playerScore === computerScore) {
        alert("Weird... Tie Game. Please Play Again!")
    }
    return result;
  }
game()

// bugs: 
// 1. game does not tick up computerScore or playerScore. 
// 2. computer gives the same option over and over. DONE

// #2 was solved by adding computerSelection = getComputerChoice(); underneath the playerSelection = getPlayerSelection();
// it wasn't giving a new computer choice each turn, but reusing the original. This forces the computer to choose newly each turn. 

// #1 I think will be solved with a loop, which I learn next lesson. So I think
// it's okay to leave it for right now, since we will come back and fix it later. 