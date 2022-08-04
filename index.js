console.log("Working...");

const elementsRPS = [
  { nb: 0, name: "Rock", src: "./images/rock.png" },
  { nb: 1, name: "Paper", src: "./images/paper.png" },
  { nb: 2, name: "Scissors", src: "./images/scissors.png" },
];

const rock = elementsRPS[0];
const paper = elementsRPS[1];
const scissors = elementsRPS[2];

function getMachineChoice() {
  const machineChoice = Math.floor(Math.random() * 3);

  return elementsRPS[machineChoice];
}

function getUserChoice(choice) {
  const userChoice = Number(choice);

  return elementsRPS[userChoice];
}

function createImgElement(choice, index) {
  let nameOfChoicer;
  if (index == 1) {
    nameOfChoicer = "human";
  } else {
    nameOfChoicer = "machine";
  }

  const choicedImageContainer = document.querySelector(`.${nameOfChoicer}`);
  const choiceImage = document.createElement("img");
  choiceImage.src = choice.src;

  const existImg = document
    .querySelector(`.${nameOfChoicer}`)
    .querySelector("img");

  if (existImg) {
    choicedImageContainer.replaceChild(choiceImage, existImg);
  } else {
    choicedImageContainer.appendChild(choiceImage);
  }
}

function playRound(userChoice, machineChoice) {
  createImgElement(userChoice, 1);
  createImgElement(machineChoice);

  if (machineChoice.nb !== userChoice.nb) {
    if (
      (machineChoice.nb === rock.nb && userChoice.nb === scissors.nb) ||
      (machineChoice.nb === paper.nb && userChoice.nb === rock.nb) ||
      (machineChoice.nb === scissors.nb && userChoice.nb === paper.nb)
    ) {
      console.log(
        `machine WINS !!! ${machineChoice.name} vs ${userChoice.name}`
      );

      return 1;
    } else {
      console.log(`User WINS !!! ${machineChoice.name} vs ${userChoice.name}`);

      return 2;
    }
  } else {
    console.log(`Match Null !!! ${machineChoice.name} vs ${userChoice.name}`);
    return null;
  }
}

function drawScoreOnScreen(usrScore, mchScore) {
  const humanScore = document.querySelector(".humanScore");
  const machineScore = document.querySelector(".machineScore");

  humanScore.textContent = usrScore;
  machineScore.textContent = mchScore;
}

function drawRoundOnScreen(round) {
  let counter = round--;
  const roundCounter = document.querySelector(".roundCounter");
  roundCounter.textContent = counter;
}

let machineScore = 0;
let userScore = 0;
let gameRounds = 3;

function game(usrChoice, round) {
  const machineChoice = getMachineChoice();
  const userChoice = getUserChoice(usrChoice);

  let winner = playRound(userChoice, machineChoice);

  if (winner === 1) {
    machineScore++;
  } else if (winner === 2) {
    userScore++;
  }

  drawScoreOnScreen(userScore, machineScore);
  drawRoundOnScreen(round);

  if (round == gameRounds) {
    console.log("End of the game !!!");
    machineScore = 0;
    userScore = 0;
    if (machineScore > userScore) {
      console.log("Machine Win the Human !!!");
    } else if (machineScore < userScore) {
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
