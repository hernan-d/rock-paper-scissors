function playRound(playerSelection, computerSelection) {
  // your code here!
}

function userPlay() {
  let userChoice = window.prompt("What's your choice?");
  let userChoiceFormatted = userChoice.toLowerCase();

  if (
    userChoiceFormatted == "rock" ||
    userChoiceFormatted == "paper" ||
    userChoiceFormatted == "scissors"
  ) {
    window.alert("Excelente");
  } else {
    window.alert("Please insert a valid play move");
    let userChoice = window.prompt("What's your choice?");
    let userChoiceFormatted = userChoice.toLowerCase();
  }
  console.log(userChoiceFormatted);
}

function computerPlay() {
  const selectionOptions = ["rock", "paper", "scissors"];
  const handChosen = Math.floor(Math.random() * selectionOptions.length);
  console.log(selectionOptions[handChosen]);
}

const playerSelection = userPlay();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
//console.log(playerSelection);
