const printMessage = function (msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const printScore = function (msg){
	document.getElementById('result').innerHTML = msg;
}

const clearMessages = function (){
	document.getElementById('messages', 'result').innerHTML = '';
}

const getMoveName = function (argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2) {
	  	return 'papier';
	} else if(argMoveId == 3) {
		return 'nożyce';
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
}

let playerWins = 0, 
	computerWins = 0;

const displayResult = function (argComputerMove, argPlayerMove){
	printMessage('Zagrałem: ' + argComputerMove + ', a Ty: ' + argPlayerMove);
	console.log('Moves:', argComputerMove, argPlayerMove);
	
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
		playerWins++;
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce' ) {
		printMessage('Ty przegrywasz!');
		computerWins++;
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień' ) {
		printMessage('Remis!');
	}else if( argComputerMove == 'papier' && argPlayerMove == 'papier' ) {
		printMessage('Remis!');
	}else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce' ) {
		printMessage('Ty wygrywasz!');
		playerWins++;
	}else if( argComputerMove == 'papier' && argPlayerMove == 'kamień' ) {
		printMessage('Ty przegrywasz!');
		computerWins++;
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ) {
		printMessage('Ty wygrywasz!');
		playerWins++;
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier' ) {
		printMessage('Ty przegrywasz!');
		computerWins++;
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' ) {
		printMessage('Remis!');
	}else if( argPlayerMove == 'nieznany ruch' ) {
		printMessage('Gracz oszukuje!');
	}
	printScore(playerWins + ' - ' + computerWins);
	console.log('Prawdopodobieństwo: ', (playerWins/(computerWins+playerWins)*100));
}

const playGame = function (playerInput){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
	console.log('Gracz wybrał: ' + playerInput);

    let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);
}

const playGameSymulation = function (){
	const proba = 100;
	for (let  i = 0; i < proba; i++){
	
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let randomNumberPlayer = Math.floor(Math.random() * 3 + 1);
    let percentPlayerWins = (playerWins/(playerWins+computerWins))*100;

    console.log('Komputer wybrał: ' + randomNumber);
	console.log('Gracz wybrał: ' + randomNumberPlayer);
	
	if(percentPlayerWins <= 75){
		if (randomNumberPlayer == 2 && randomNumber == 3) {
			randomNumber = 1;
		} else if (randomNumberPlayer == 3 && randomNumber == 1) {
			randomNumber = 2;
		} else if(randomNumberPlayer == 1 && randomNumber == 2) {
			randomNumber = 3;
		}
	}
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(randomNumberPlayer);

    displayResult(computerMove, playerMove);
	}
}
