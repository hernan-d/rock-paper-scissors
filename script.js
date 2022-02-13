const playerSelection = "paper";
const computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

//Gets and compare computer & player selections
function playRound(playerSelection, computerSelection) {
  //Comparing selections to know who won
  //If tie
  if (playerSelection === computerSelection) {
    window.alert("Empate" + "\n" + playerSelection + "\n" + computerSelection);
    //One point for each
    playerScore += 1;
    computerScore += 1;
  }

  //If player won
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    window.alert("Player" + "\n" + playerSelection + "\n" + computerSelection);
    //Add point to player score
    playerScore += 1;
  }

  //If computer won
  else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection == "rock") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    window.alert(
      "Computer" + "\n" + playerSelection + "\n" + computerSelection
    );
    //Add point to computer score
    computerScore += 1;
  }

  //Computer won > Add point to score
  //Tie > One point for each
  //Checks score, if no one reached 5 play again

  //playRound();
}
playRound(playerSelection, "scissors");

/* Commenting to stop prompt
function userPlay() {
  //Prompts the user for a selection and formats it
  const userChoice = window.prompt("What's your choice?");
  const userChoiceFormatted = userChoice.toLowerCase();

  //Compares the selection with the accepted answers
  if (
    userChoiceFormatted === "rock" ||
    userChoiceFormatted === "paper" ||
    userChoiceFormatted === "scissors"
  ) {
    //If passed, tells you which is it, and stores it
    window.alert(`You chose ${userChoiceFormatted}`);
    console.log(userChoiceFormatted);
  } else {
    //If not, gives you a warning and restarts the function
    window.alert(
      userChoice +
        " it's not a valid play move." +
        "\n" +
        "Rock, paper or scissors only admitted."
    );
    userPlay();
  }
}
*/

//Function that picks randomly between items of an array
//In this case between rock, paper & scissors
function computerPlay() {
  const selectionOptions = ["rock", "paper", "scissors"];
  const handChosen = Math.floor(Math.random() * selectionOptions.length);
  console.log("Computer Choice: " + selectionOptions[handChosen]);
}

//const playerSelection = userPlay();
//const playerSelection = "paper";
//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));
console.log("Player Choice: " + playerSelection);
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
//console.log(playRound[playerScore]);
