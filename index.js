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

function getUserChoice() {
  const userChoice = Number(
    prompt(
      `Choice: ${rockName} = ${rockNumber} or ${paperName} = ${paperNumber} or ${scissorsName} = ${scissorsNumber}`
    )
  );

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

function game(userChoice) {
  console.log(userChoice);
  let computerScore = 0;
  let userScore = 0;

  for (let rounds = 1; rounds <= 5; rounds++) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    console.log(`Round: ${rounds}`);
    let winner = playRound(computerChoice, userChoice);

    if (winner === 1) {
      computerScore += 1;
    } else if (winner === 2) {
      userScore += 1;
    }
    console.log(`Score: Computer: ${computerScore} ------ User: ${userScore}`);
    if (rounds >= 5) {
      if (computerScore > userScore) {
        console.log("Machine Win the Human !!!");
      } else if (computerScore < userScore) {
        console.log("The little Human Win the Machine !!!");
      } else {
        console.log("Game Null");
      }
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
  arrBtn.forEach(btn => {
    btn.addEventListener("click", e => game(e.target.id));
  });
}

const arrayOfButtons = getButtons();

getBtnClickEvent(arrayOfButtons);
