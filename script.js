// Create function to make computer selection 
function computerNumber() {
    const number = (Math.random() * 3)
    if (number >= 2) {
        return 'rock'
}   else if (number >=1) {
        return 'paper'
}   else return 'scissors'
}

let playerScore = 0;
let computerScore = 0;

// Create function to play one round of RPS
/*function gamePlay (computerChoice,userChoice) {


    if (computerChoice==userChoice) {
    console.log("It's a tie!");
    } 
    
    else if (userChoice=='rock'&&computerChoice=='scissors'||userChoice=='paper'&&computerChoice=='rock'|| userChoice=='scissors'&&computerChoice=='paper') {
        console.log('User chose ' + userChoice + '. Computer chose ' + computerChoice + `. User wins this round! Score: ${playerScore} to ${computerScore}.`)
    }  
    
    
    else if (userChoice != 'rock' || 'paper' || 'scissors') {
    console.log('Please check your spelling');
    }  
    
    else {
    console.log ('User chose ' + userChoice + '. Computer chose ' + computerChoice + `. Computer wins this round! Score: ${playerScore} to ${computerScore}.`);
    }
}*/

function gamePlay (computerChoice,userChoice) {

if (userChoice=='rock'&&computerChoice=='scissors'||userChoice=='paper'&&computerChoice=='rock'|| userChoice=='scissors'&&computerChoice=='paper') {
    console.log('User chose ' + userChoice + '. Computer chose ' + computerChoice + `. User wins!.`)

} else if (userChoice=='scissors'&&computerChoice=='rock'||userChoice=='rock'&&computerChoice=='paper'|| userChoice=='paper'&&computerChoice=='scissors') {
    console.log('User chose ' + userChoice + '. Computer chose ' + computerChoice + `. Computer wins!.`)

} else if (computerChoice==userChoice) {
        console.log("It's a tie!");
    
} else console.log('Please check your spelling.');



}
    
//Create a function so that the game has five rounds
function gameRounds() {
    for (let i = 0; i < 5; i++) {
        // Define variables and invoke gamePlay() inside of console.log after each round
        let userChoice = prompt('Rock, Paper, or Scissors?');
        userChoice = userChoice.toLowerCase();
        let computerChoice = computerNumber();
        console.log(gamePlay(computerChoice,userChoice));
    }   

}

gameRounds();





