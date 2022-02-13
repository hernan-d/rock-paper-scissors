function playRound(playerSelection, computerSelection) {
  // your code here!
}

//Function that prompts the user for a selection
//Then compares it to the accepted answers to validate it
function userPlay() {
  const userChoice = window.prompt("What's your choice?");
  const userChoiceFormatted = userChoice.toLowerCase();

  if (
    userChoiceFormatted === "rock" ||
    userChoiceFormatted === "paper" ||
    userChoiceFormatted === "scissors"
  ) {
    window.alert(`You chose ${userChoiceFormatted}`);
    console.log(userChoiceFormatted);
  } else {
    window.alert("Please insert a valid play move");
    userPlay();
  }
}

//Function that picks randomly between items of an array
//In this case between rock, paper & scissors
function computerPlay() {
  const selectionOptions = ["rock", "paper", "scissors"];
  const handChosen = Math.floor(Math.random() * selectionOptions.length);
  console.log(selectionOptions[handChosen]);
}

const playerSelection = userPlay();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
//console.log(playerSelection);
