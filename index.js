console.log("Working...");

const elementsRPS = [
  { nb: 0, name: "Rock" },
  { nb: 1, name: "Paper" },
  { nb: 2, name: "Scissors" },
];

const rockNumber = elementsRPS[0].nb;
const rockName = elementsRPS[0].name;

const paperNumber = elementsRPS[1].nb;
const paperName = elementsRPS[1].name;

const scissorsNumber = elementsRPS[2].nb;
const scissorsName = elementsRPS[2].name;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  return elementsRPS[computerChoice];
}

function getUserChoice(choice) {
  const userChoice = Number(choice);

  return elementsRPS[userChoice];
}

function playRound(computerChoice, userChoice) {
  if (computerChoice.nb !== userChoice.nb) {
    if (
      (computerChoice.nb === rockNumber && userChoice.nb === scissorsNumber) ||
      (computerChoice.nb === paperNumber && userChoice.nb === rockNumber) ||
      (computerChoice.nb === scissorsNumber && userChoice.nb === paperNumber)
    ) {
      console.log(
        `Computer WINS !!! ${computerChoice.name} vs ${userChoice.name}`
      );

      return 1;
    } else {
      console.log(`User WINS !!! ${computerChoice.name} vs ${userChoice.name}`);

      return 2;
    }
  } else {
    console.log(`Match Null !!! ${computerChoice.name} vs ${userChoice.name}`);
    return null;
  }
}

let computerScore = 0;
let userScore = 0;
let gameRounds = 3;

function game(usrChoice, round) {
  const computerChoice = getComputerChoice();
  const userChoice = getUserChoice(usrChoice);

  console.log(`Round: ${round}`);

  let winner = playRound(computerChoice, userChoice);

  if (winner === 1) {
    computerScore++;
  } else if (winner === 2) {
    userScore++;
  }
  console.log(`Score: Computer: ${computerScore} ------ User: ${userScore}`);

  if (round == gameRounds) {
    console.log("End of the game !!!");
    if (computerScore > userScore) {
      console.log("Machine Win the Human !!!");
    } else if (computerScore < userScore) {
      console.log("The little Human Win the Machine !!!");
    } else {
      console.log("Game Null");
    }
  }
}

function getButtons() {
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorBtn = document.querySelector("#scissor");

  const arrayOfButtons = [rockBtn, paperBtn, scissorBtn];

  return arrayOfButtons;
}

function getBtnClickEvent(arrBtn) {
  let round = 1;
  arrBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      game(index, round);

      if (round == gameRounds) {
        round = 0;
      }
      round++;
    });
  });
}

const arrayOfButtons = getButtons();

getBtnClickEvent(arrayOfButtons);
