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

const getUserChoice = choice => elementsRPS[choice];

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
      //machine win
      drawColorWinnerLoser("machine");

      return 2;
    } else {
      // user win
      drawColorWinnerLoser("human");
      return 1;
    }
  } else {
    //  match null
    drawColorWinnerLoser(null);
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

function drawColorWinnerLoser(winnerName) {
  let winner = ["human", "machine"];

  winner.forEach(name => {
    const imageContainer = document.querySelector(`.${name}`);
    if (winnerName === name) {
      imageContainer.style.background = "#689775";
    } else {
      imageContainer.style.background = "#A33327";
    }

    if (winnerName == null) {
      imageContainer.style.background = "orange";
    }
  });
}

let machineScore = 0;
let userScore = 0;
let gameRounds = 5;

function game(usrChoice, round) {
  const machineChoice = getMachineChoice();
  const userChoice = getUserChoice(usrChoice);

  let winner = playRound(userChoice, machineChoice);

  if (winner === 2) {
    machineScore++;
  } else if (winner === 1) {
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
