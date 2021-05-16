clearMessages;
console.log('move name: 1 -', getMoveName('1'));
console.log('move name: 2 -', getMoveName('2'));
console.log('move name: 3 -', getMoveName('3'));

//playGame(3);
  
let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');

rockButton.addEventListener('click', function(){console.log('przzycisk-test');playGame(1)});
paperButton.addEventListener('click', function(){playGame(2)});
scissorsButton.addEventListener('click', function(){playGame(3)});
/*document.getElementById('play-rock').addEventListener('click', console.log('przzycisk-wwww'), playGame(1));
document.getElementById('play-paper').addEventListener('click', console.log('przzycisk-xxx'), playGame(2));*/