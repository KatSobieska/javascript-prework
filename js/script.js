{
  const stone = "kamień";
  const paper = "papier";
  const scissors = "nożyce";
  const unknownMove = "nieznany ruch";

  const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return stone;
      } else if (argMoveId == 2) {
        return paper;
      } else if (argMoveId == 3) {
        return scissors;
      } else {
        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return unknownMove;
      }
    };
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    let playerMove = getMoveName(playerInput);

    const displayResult = function (argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      if (argComputerMove == stone && argPlayerMove == paper) {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == stone && argPlayerMove == scissors) {
        printMessage("Ja wygrywam!");
      } else if (argComputerMove == paper && argPlayerMove == stone) {
        printMessage("Ja wygrywam!");
      } else if (argComputerMove == paper && argPlayerMove == scissors) {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == scissors && argPlayerMove == paper) {
        printMessage("Ja wygrywam!");
      } else if (argComputerMove == scissors && argPlayerMove == stone) {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == argPlayerMove) {
        printMessage("OH! Remis");
      } else if (argPlayerMove == unknownMove) {
        printMessage("UPS..coś poszło nie tak :(");
      }
    };

    displayResult(computerMove, playerMove);
  };
  let playRock = document.getElementById("play-rock");

  playRock.addEventListener("click", () => {
    playGame(1);
  });

  let playPaper = document.getElementById("play-paper");

  playPaper.addEventListener("click", () => {
    playGame(2);
  });

  let playScissors = document.getElementById("play-scissors");

  playScissors.addEventListener("click", () => {
    playGame(3);
  });
}
