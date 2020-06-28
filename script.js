// //Set global variables
let computerScore = 0;
let userScore = 0;

// Returns a single shape from a shape array and updates the computer image
function computerChoice() {
  const shapeArray = ["rock", "paper", "scissors"];
  const computerShape =
    shapeArray[Math.floor(Math.random() * shapeArray.length)];
  document.getElementById("computer-image").src = `assets/${computerShape}.png`;
  return computerShape;
}
// Resets initial images, scores and event listeners
function resetGame() {
  (computerScore = 0), (userScore = 0);
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("computer-image").src = `assets/computer.png`;
  const button = document.querySelectorAll("button");
  button.forEach((element) => {
    element.addEventListener("click", playGame);
  });
  const removeParaContent = document.getElementById("result-paragraph");
  removeParaContent.textContent = "";
  const removeButton = document.querySelector(".result");
  removeButton.removeChild(removeButton.lastElementChild);
}
//
function playGame(e) {
  const userChoice = e.target.dataset.key;
  const computer = computerChoice();
  const winner = playRound(userChoice, computer);
  if (winner === "user") {
    userScore += 1;
    document.getElementById("user-score").innerText = userScore;
  } else if (winner === "computer") {
    computerScore += 1;
    document.getElementById("computer-score").innerText = computerScore;
  }
  if (computerScore === 5) {
    document.getElementById("result-paragraph").innerText = "Computer Wins";
    stopGame();
  } else if (userScore === 5) {
    document.getElementById("result-paragraph").innerText = "You Win!";
    stopGame();
  }
}
const button = document.querySelectorAll("button");
button.forEach((element) => {
  element.addEventListener("click", playGame);
});
// Removes event listeners and displays replay button
function stopGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.removeEventListener("click", playGame);
  });
  const resultsDiv = document.querySelector(".result");
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play Again?";
  playAgain.classList.add("gradient-button");
  playAgain.addEventListener("click", resetGame);
  resultsDiv.appendChild(playAgain);
}
// Plays a single round and returns a winner
function playRound(userSelection, computerSelection) {
  let winner = "";
  switch (computerSelection) {
    case "rock":
      if (userSelection === "paper") {
        return (winner = "user");
        break;
      }
      if (userSelection === "scissors") {
        return (winner = "computer");
      }

      return (winner = "draw");

    case "paper":
      if (userSelection === "scissors") {
        return (winner = "user");
      }
      if (userSelection === "rock") {
        return (winner = "computer");
      }

      return (winner = "draw");

    case "scissors":
      if (userSelection === "rock") {
        return (winner = "user");
      }
      if (userSelection === "paper") {
        return (winner = "computer");
      }

      return (winner = "draw");
    default:
  }
}
