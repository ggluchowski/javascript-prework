function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printScore(msg){
	let div = document.createElement('div');
	document.getElementById('result').innerHTML = msg;
}

function clearMessages(){
	document.getElementById('messages', 'result').innerHTML = '';
}

function getMoveName(argMoveId){
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
let playerWins = 0;
console.log(playerWins);
let computerWins = 0;
console.log(computerWins);

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem: ' + argComputerMove + ', a Ty: ' + argPlayerMove);
	console.log('moves:', argComputerMove, argPlayerMove);
	
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
		playerWins++;
		console.log('PW: ', playerWins);
		console.log('spr: ', argComputerMove, argPlayerMove);
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce' ) {
		printMessage('Ty przegrywasz!');
		computerWins++;
		console.log('KW: ', computerWins);
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień' ) {
		printMessage('Remis!');
	}else if( argComputerMove == 'papier' && argPlayerMove == 'papier' ) {
		printMessage('Remis!');
	}else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce' ) {
		printMessage('Ty wygrywasz!');
		playerWins++;
		console.log('PW: ', playerWins);
	}else if( argComputerMove == 'papier' && argPlayerMove == 'kamień' ) {
		printMessage('Ty przegrywasz!');
		computerWins++;
		console.log('KW: ', computerWins);
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ) {
		printMessage('Ty wygrywasz!');
		playerWins++;
		console.log('PW: ', playerWins);
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier' ) {
		printMessage('Ty przegrywasz!');
		computerWins++;
		console.log('KW: ', computerWins);
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' ) {
		printMessage('Remis!');
	}else if( argPlayerMove == 'nieznany ruch' ) {
		console.log('spr nieznany ruch');
		printMessage('Gracz oszukuje!');
	}
	printScore(playerWins + ' - ' + computerWins);
	console.log('Prawdopodobieństwo: ', (playerWins/(computerWins+playerWins)*100));
}

function playGame(playerInput){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
	console.log('Gracz wybrał: ' + playerInput);

    let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);
    //printMessage('Ruch komputera to: ' + computerMove);
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    //printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}


function playGameSymulation(){
	
	let proba = 100;
	for (let  i = 0; i < proba; i++){
	
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let randomNumberPlayer = Math.floor(Math.random() * 3 + 1);
    
    console.log('Komputer wybrał: ' + randomNumber);
	console.log('Gracz wybrał: ' + randomNumberPlayer);
	
	// zwiekszenie do poziomu 66%, kolejny to 83% 
	if (randomNumberPlayer == 2 && randomNumber == 3) {
		randomNumber = 1;
		console.log('---Po zmianie ', randomNumber);
	}

    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(randomNumberPlayer);

    displayResult(computerMove, playerMove);

	}
}