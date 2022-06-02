const 
rock = "rock",
paper = "paper",
scissors = "scissors",
winMsg = "You won!",
loseMsg = "Sucker, you lost!",
tieMsg = "'Tis a tie!",
errorMsg = "An error has occured.";

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*3) // random integer between 0 - 2
  // 0, 1, 2 = rock, paper, scissors
  if (randomNumber == 0){
    console.log("Computer chose " + rock);
    return rock;
  } else if (randomNumber == 1){
    console.log("Computer chose " + paper);
    return paper;
  } else {
    console.log("Computer chose " + scissors);
    return scissors;
  }
}

function letsPlay(playerSelection, computerSelection) {
  console.log("You chose " + playerSelection)
  if (computerSelection == rock){
    if (playerSelection == rock){
      console.log(tieMsg);
      return tieMsg;
    } else if (playerSelection == paper){
      console.log(winMsg);
      return winMsg;
    } else if (playerSelection == scissors){
      console.log(loseMsg);
      return loseMsg;
    } else {
      return errorMsg;
    }
  } else if (computerSelection == paper){
    if (playerSelection == rock){
      console.log(loseMsg);
      return loseMsg;
    } else if (playerSelection == paper){
      console.log(tieMsg);
      return tieMsg;
    } else if (playerSelection == scissors){
      console.log(winMsg);
      return winMsg;
    } else {
      return errorMsg;
    }
  } else if (computerSelection == scissors){
    if (playerSelection == rock){
      console.log(winMsg);
      return winMsg;
    } else if (playerSelection == paper){
      console.log(loseMsg);
      return loseMsg;
    } else if (playerSelection == scissors){
      console.log(tieMsg);
      return tieMsg;
    } else {
      return errorMsg;
    }
  }
}
  
const playerSelection = "rock";

let playerScore = 0;    // initialize scores
let computerScore = 0;  // initialize scores

function game(){ // game of 5 rounds with scores kept
  for (let i = 0; i < 5; i++){
    let choice = prompt("Rock, paper, scissors!");
    let result = letsPlay(choice.toLowerCase(), computerPlay());

    if (result == winMsg){
      playerScore++;
    } else if (result == loseMsg){
      computerScore++;
    }
    console.log("Player: " + playerScore + " Computer: " + computerScore);
  }
  if (playerScore > computerScore){
    console.log("Hurray! You defeated the evil computer!");
  } else if (playerScore < computerScore){
    console.log("Oof, you got beat by a machine.");
  } else if (playerScore == computerScore){
    console.log("There is no winner.");
  } else {
    console.log(errorMsg);
  }
}

game()