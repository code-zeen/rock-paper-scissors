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
  if (computerSelection == rock){
    if (playerSelection == rock){
      console.log(tieMsg);
    } else if (playerSelection == paper){
      console.log(winMsg);
    } else if (playerSelection == scissors){
      console.log(loseMsg);
    } else {
      console.log(errorMsg);
    }
  } else if (computerSelection == paper){
    if (playerSelection == rock){
      console.log(loseMsg);
    } else if (playerSelection == paper){
      console.log(tieMsg);
    } else if (playerSelection == scissors){
      console.log(winMsg);
    } else {
      console.log(errorMsg);
    }
  } else if (computerSelection == scissors){
    if (playerSelection == rock){
      console.log(winMsg);
    } else if (playerSelection == paper){
      console.log(loseMsg);
    } else if (playerSelection == scissors){
      console.log(tieMsg);
    } else {
      console.log(errorMsg);
    }
  }
}
  
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(letsPlay(playerSelection, computerSelection))

// let playerSelection = prompt("Rock, paper, scissors!", "rock");
//   computerSelection = computerPlay();
//   console.log(playerSelection)
//   console.log(computerSelection)

letsPlay()