console.log("Working...");

const elementsRPS = [
  { nb: 0, name: "Rock", src: "./images/rock.png" },
  { nb: 1, name: "Paper", src: "./images/paper.png" },
  { nb: 2, name: "Scissors", src: "./images/scissors.png" },
];

const rock = elementsRPS[0];
const paper = elementsRPS[1];
const scissors = elementsRPS[2];

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
      (computerChoice.nb === rock.nb && userChoice.nb === scissors.nb) ||
      (computerChoice.nb === paper.nb && userChoice.nb === rock.nb) ||
      (computerChoice.nb === scissors.nb && userChoice.nb === paper.nb)
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
