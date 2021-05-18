{
clearMessages();

console.log('move name: 1 -', getMoveName('1'));
console.log('move name: 2 -', getMoveName('2'));
console.log('move name: 3 -', getMoveName('3'));
  
let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');
let bombButton = document.getElementById('play-bomb');

rockButton.addEventListener('click', function(){playGame(1)});
paperButton.addEventListener('click', function(){playGame(2)});
scissorsButton.addEventListener('click', function(){playGame(3)});
bombButton.addEventListener('click', function(){playGameSymulation()});
}