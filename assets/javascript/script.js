// Choices
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice;

// Get the elements
const buttons = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset");
const computerChoiceDisplay = document.querySelector("#computer-choice"); // Add this line

// Computer's choice
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

// Update the score and result display
function updateDisplay(playerChoice, computerChoice) {
  const roundResult = playRound(playerChoice, computerChoice);
  result.textContent = roundResult;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

// Show computer's choice clearly on the screen
function showComputerChoice(choice) {
  computerChoiceDisplay.textContent = `Computer chose: ${choice}`;
}

// Reset/start the game from 0-0
function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  result.textContent = "";
  computerChoiceDisplay.textContent = ""; // Clear the computer's choice display
}


// Play the game when a choice button is clicked
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.id;
    computerChoice = computerPlay();
    updateDisplay(playerChoice, computerChoice);
    showComputerChoice(computerChoice); // Show computer's choice immediately
  })
);


// Reset the game when the reset button is clicked
resetButton.addEventListener("click", reset);
