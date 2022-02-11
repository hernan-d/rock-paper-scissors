function playRound(playerSelection, computerSelection) {
    let playerSelection = window.prompt("What's your choice?");
  // your code here!
}

function computerPlay() {
    const selectionOptions = ['rock', 'paper', 'scissors'];
    const handChosen = Math.floor(Math.random() * selectionOptions.length);
    console.log(selectionOptions[handChosen]);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
