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

const computerChoice = getComputerChoice();
const userChoice = getUserChoice();

console.log(`pc : ${computerChoice.name}`);
console.log(`user : ${userChoice.name}`);

function playRound() {
  if (computerChoice.nb !== userChoice.nb) {
    if (
      (computerChoice.nb === rockNumber && userChoice.nb === scissorsNumber) ||
      (computerChoice.nb === paperNumber && userChoice.nb === rockNumber) ||
      (computerChoice.nb === scissorsNumber && userChoice.nb === paperNumber)
    ) {
      console.log(
        `Computer WINS !!! ${computerChoice.name} vs ${userChoice.name}`
      );
    } else {
      console.log(`User WINS !!! ${computerChoice.name} vs ${userChoice.name}`);
    }
  } else {
    console.log(`Match Null !!! ${computerChoice.name} vs ${userChoice.name}`);
  }
}

playRound();
