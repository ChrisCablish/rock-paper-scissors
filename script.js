function computerNumber() {
    const number = (Math.random() * 2)
    if (number >= 1) {
        return 'rock'
    } else return "paper"
}

function gamePlay (computerChoice,userChoice) {
    if (computerChoice == 'rock' && userChoice == 'paper') {
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. Paper covers rock. User Wins.'
    } else if (computerChoice == 'paper' && userChoice == 'rock'){
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. Paper covers rock. Computer Wins.'
    } else if (computerChoice == 'paper' && userChoice == 'paper'){
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. The game is a tie.'
    } else if (computerChoice == 'rock' && userChoice == 'rock'){
        return 'Computer chose ' + computerChoice + '. User chose ' + userChoice + '. The game is a tie.'
    } else return 'Please type carefully. Only rock and paper are valid prompt responses.'
}   

let userChoice = prompt('Rock or Paper?');
userChoice = userChoice.toLowerCase();
let computerChoice = computerNumber();
console.log(gamePlay(computerChoice,userChoice));





