console.log('move name: 1 -', getMoveName('1'));
console.log('move name: 2 -', getMoveName('2'));
console.log('move name: 3 -', getMoveName('3'));

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

//printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

//printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);
