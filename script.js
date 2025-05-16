const orb = document.getElementById("orb");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const resultScreen = document.getElementById("resultScreen");
const finalScore = document.getElementById("finalScore");
const startScreen = document.getElementById("startScreen");
const gameContainer = document.getElementById("gameContainer");
const clickSound = document.getElementById("clickSound");

let score = 0;
let timeLeft = 30;
let gameTimer;

function randomPosition() {
  const maxX = gameArea.clientWidth - orb.offsetWidth;
  const maxY = gameArea.clientHeight - orb.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  orb.style.left = `${x}px`;
  orb.style.top = `${y}px`;
}

orb.addEventListener("click", () => {
  clickSound.play();
  score++;
  scoreDisplay.textContent = score;
  randomPosition();
});

function startTimer() {
  gameTimer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameTimer);
      orb.style.display = "none";
      finalScore.textContent = score;
      resultScreen.classList.remove("hidden");
    }
  }, 1000);
}

function startGame() {
  startScreen.style.display = "none";
  gameContainer.style.display = "block";
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  orb.style.display = "block";
  resultScreen.classList.add("hidden");
  randomPosition();
  startTimer();
}

function restartGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  resultScreen.classList.add("hidden");
  orb.style.display = "block";
  randomPosition();
  startTimer();
}
