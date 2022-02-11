{
  const stone = 'kamień';
  const paper = 'papier';
  const scissors = 'nożyce';

  function playGame(playerInput) {
  clearMessages ()
    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return stone;
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    function displayResult(argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if (argComputerMove == stone && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == stone && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
      } else if (argComputerMove == paper && argPlayerMove == 'kamień') {
        printMessage('Ja wygrywam!');
      } else if (argComputerMove == paper && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
      } else if(argComputerMove == scissors && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam!');
      } else if (argComputerMove == scissors && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == argPlayerMove) {
        printMessage('OH! Remis');
      } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('UPS..coś poszło nie tak :(');
      }
    }

    displayResult(computerMove, playerMove);
  
}
let playRock = document.getElementById('play-rock');

playRock.addEventListener('click', () => {
  playGame(1);
});

let playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', () => {
  playGame(2);
});

let playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', () => {
  playGame(3);
});
}