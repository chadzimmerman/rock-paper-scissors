function getRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function getComputerChoice() {
    let result;
    let randomNumber = getRandom();
    //initally you used the getRanom in every if statement which will give a different number every time making it possible to return with an "undefined" computerChoice
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
  if (playerSelection === "rock" && computerSelection === "paper")       {
    result = "You Lose! Paper covers Rock!";
  } 
  else if (playerSelection === "paper" && computerSelection ===     "scissors") {
    result = "You Lose! Scissors cuts Paper!";
  } 
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You Lose! Rock smashes Scissors!";
  } 
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You Win! Rock smashes Scissors!";
  } 
  else if (playerSelection === "paper" && computerSelection === "rock"){
    result = "You Win! Paper covers Rock!";
  } 
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You Win! Scissors cuts Paper!";
  } 
  else if (playerSelection === "paper" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors") {
    result = "Whoops! A Draw! Please try again!";
  }
  console.log(result)
  return result;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    //you need the playerSelection and computerSelection variables inside of the game function
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    //in your original code you forgot to pass through these variable to the playRound function, resulting in the player always winning

    if (result === "You Win! Rock smashes Scissors!" || result === "You Win! Paper covers Rock!" || result === "You Win! Scissors cuts Paper!") {
      /// you have to put result === for every other ||
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" ||result === "You Lose! Scissors cuts Paper!" ||result === "You Lose! Rock smashes Scissors!") {
      /// you have to put result === for every other ||
        result = ++computerScore; 
    }
    //  else if (result === "Whoops! A Draw! Please try again!") {
    //     result = playerScore, computerScore;
    // }
    //this result line has incorrect syntax
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    playerSelection = getPlayerSelection();
    //you forgot to update the player selection 
    playRound(playerSelection,computerSelection);
    //same here didnt pass the arguemnts
    if (result === "You Win! Rock smashes Scissors!" || "You Win! Paper covers Rock!" || "You Win! Scissors cuts Paper!") {
        result = ++playerScore;
    } else if (result === "You Lose! Paper covers Rock!" || "You Lose! Scissors cuts Paper!" || "You Lose! Rock smashes Scissors!") {
        result = ++computerScore; 
    } else if (result === "Whoops! A Draw! Please try again!") {
        result = playerScore, computerScore;
    }
    alert("The score is " + playerScore + " for the player and " + computerScore + " for the computer.");

    return result;
  }
game()