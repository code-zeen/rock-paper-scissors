// Pseudo-code Planning:
// Goal: computerPlay() randomly returns rock, paper, or scissors.
// Math.random() -> random num btwn 0 and 0.999...
// Multiply by 10 -> random num btwn 0 and 9.999...
// I need the random number to have only 3 options.
// Divide by 3 -> random num btwn 0 and 3.333...
// Math.floor() -> random num between 0 1 2 3
// buuuuuut this skews against 3's favor :/
// so ditch 3.
// 0, 1, 2 = rock, paper, scissors
// 3 = reroll

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*3) // random integer between 0 - 3
  // 0, 1, 2 = rock, paper, scissors
  // 3 = reroll
  console.log(randomNumber); // it works

  if (randomNumber == 0){
    console.log("rock");
  } else if (randomNumber == 1){
    console.log("paper");
  } else {
    console.log("scissors");
  }
}

computerPlay()