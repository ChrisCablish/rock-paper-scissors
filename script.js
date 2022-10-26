// Define variables and invoke gamePlay() inside of console.log
let userChoice = prompt('Rock, Paper, or Scissors?');
userChoice = userChoice.toLowerCase();
let computerChoice = computerNumber();
console.log(gamePlay(computerChoice,userChoice));

// Create function to make computer selection 
function computerNumber() {
    const number = (Math.random() * 3)
    if (number >= 2) {
        return 'rock'
}   else if (number >=1) {
        return 'paper'
}   else return 'scissors'
}

// Create function to run one round of the game
function gamePlay (computerChoice,userChoice) {
    if (computerChoice===userChoice) {
        console.log("It's a tie!");
    } else if (userChoice=='rock'&&computerChoice=='scissors'||userChoice=='paper'&&computerChoice=='rock'|| userChoice=='scissors'&&computerChoice=='paper') {
        console.log('User chose ' + userChoice + '. Computer chose ' + computerChoice + '. User Wins!')
    }  else if (userChoice != 'rock' || 'paper' || 'scissors') {
        console.log('Please check your spelling');
    }  else {
        console.log ('User chose ' + userChoice + '. Computer chose ' + computerChoice + '. Computer Wins!');
    }
}
    





    
    /*if (computerChoice == 'rock' && userChoice == 'paper') {
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. Paper covers rock. User Wins.'
    } else if (computerChoice == 'paper' && userChoice == 'rock'){
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. Paper covers rock. Computer Wins.'
    } else if (computerChoice == 'paper' && userChoice == 'paper'){
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. The game is a tie.'
    } else if (computerChoice == 'rock' && userChoice == 'rock'){
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. The game is a tie.'
    } else return 'Please type carefully. Only rock and paper are valid prompt responses.'


    
} 
*/  





