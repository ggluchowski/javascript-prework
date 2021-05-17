{
const clearMessages = function (){
	document.getElementById('messages', 'result').innerHTML = '';
};

console.log('move name: 1 -', getMoveName('1'));
console.log('move name: 2 -', getMoveName('2'));
console.log('move name: 3 -', getMoveName('3'));

//playGame(3);
  
let rockButton = document.getElementById('play-rock').addEventListener('click', function(){console.log('przzycisk-test');playGame(1)});
let paperButton = document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
let scissorsButton = document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});

let bombButton = document.getElementById('play-bomb').addEventListener('click', function(){playGameSymulation()});


/*document.getElementById('play-rock').addEventListener('click', console.log('przzycisk-wwww'), playGame(1));
document.getElementById('play-paper').addEventListener('click', console.log('przzycisk-xxx'), playGame(2));*/

}