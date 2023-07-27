let buttons = document.querySelectorAll(".button");

document.getElementById("restart").style.display = "none";
document.getElementById("restart").addEventListener("click", restart);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.querySelector("p").id, getComputerChoice());

    if (playerScore == 5 || computerScore == 5) {
      gameOver();
    }
  });
});

const rps = {
  Rock: 0,
  Paper: 1,
  Scissors: 2,
};

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  // draw
  if (playerSelection == computerSelection) {
    document.querySelector("#message").textContent = "Draw!";
  }
  // lose
  else if (
    (computerSelection == rps.Rock && playerSelection == rps.Scissors) ||
    (computerSelection == rps.Paper && playerSelection == rps.Rock) ||
    (computerSelection == rps.Scissors && playerSelection == rps.Paper)
  ) {
    document.querySelector("#message").textContent = "Lose!";
    computerScore++;
  }
  // win
  else {
    document.querySelector("#message").textContent = "Win!";
    playerScore++;
  }
  updateScoreUI();
}

function updateScoreUI() {
  document.querySelector("#player").textContent = `Player: ${playerScore}`;
  document.querySelector(
    "#computer"
  ).textContent = `Computer: ${computerScore}`;
}

function gameOver() {
  document.getElementById("game").style.display = "none";
  document.getElementById("restart").style.display = "block";

  if (computerScore >= 5)
    document.querySelector("#message").textContent = "Game Over! You Lost!";
  else
    document.querySelector("#message").textContent =
      "Congratulations! You Won!";
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  updateScoreUI();

  document.getElementById("game").style.display = "block";
  document.getElementById("restart").style.display = "none";
}
