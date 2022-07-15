const rock = 1;
const paper = 2;
const scissors = 3;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === rock) {
    return rock;
  } else if (computerChoice === paper) {
    return paper;
  } else {
    return scissors;
  }
}

const computerChoice = getComputerChoice();

const userChoice = Number(
  prompt("Choice: Rock = 1 - Paper = 2 - Scissors = 3")
);

console.log("Computer choice: " + computerChoice);
console.log("User choice: " + userChoice);

if (computerChoice !== userChoice) {
  if (computerChoice === rock && userChoice == scissors) {
    console.log("Pc: Rock > User: Scissors");
    console.log("Computer WIN !!!");
  } else if (computerChoice === rock && userChoice == paper) {
    console.log("Pc: Rock < User: Paper");
    console.log("User WIN !!!");
  } else if (computerChoice === paper && userChoice === scissors) {
    console.log("Pc: Paper < User: Scissors");
    console.log("User WIN !!!");
  } else if (computerChoice === paper && userChoice === rock) {
    console.log("Pc: Paper > User: Rock");
    console.log("Computer WIN !!!");
  } else if (computerChoice === scissors && userChoice === paper) {
    console.log("Pc: Scissors > User: Paper");
    console.log("Computer WIN !!!");
  } else if (computerChoice === scissors && userChoice === rock) {
    console.log("Pc: Scissors < User: Rock");
    console.log("User WIN !!!");
  }
} else {
  console.log("0 - 0");
}
