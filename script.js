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

function gamePlay (computerChoice,userChoice) {

if (userChoice=='rock'&&computerChoice=='scissors'||userChoice=='paper'&&computerChoice=='rock'|| userChoice=='scissors'&&computerChoice=='paper') {
    playerScore++;
    console.log('User chose ' + userChoice + '. Computer chose ' + computerChoice + `. User wins this round! The score is User: ${playerScore} Computer: ${computerScore}.`)

} else if (userChoice=='scissors'&&computerChoice=='rock'||userChoice=='rock'&&computerChoice=='paper'|| userChoice=='paper'&&computerChoice=='scissors') {
    computerScore++;
    console.log('User chose ' + userChoice + '. Computer chose ' + computerChoice + `. Computer wins this round! The score is User: ${playerScore} Computer: ${computerScore}.`)

} else if (computerChoice==userChoice) {
        console.log("It's a tie! Try that round again.");
         

    
} else console.log('Please check your spelling.');
}
    


//Create loop function so that the game has five rounds

function gameRounds() {
    for (let i = 0; i < 5; i++) {
        // Define variables and invoke gamePlay() inside of console.log after each round
        let userChoice = prompt('Rock, Paper, or Scissors?');
        userChoice = userChoice.toLowerCase();
        let computerChoice = computerNumber();
        console.log(gamePlay(computerChoice,userChoice));
    }   

    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);

}

gameRounds();





