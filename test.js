//declaring an array of options
const array = ["rock", "paper", "scissors"].map(array => array.toLowerCase())
//initiating scores
let humanScore = 0;
let computerScore = 0;

//get human choice and convert to lower case
function getHumanChoice(){
    var choice = prompt("Start the game by selecting one of the three rock, paper or scisors: ").toLowerCase();
    
    if (array.includes(choice)){
        console.log(choice); //log human choice to console
    }
    else {
        alert("Enter only one of the following values: rock, paper or scissors");

    };
}

    getHumanChoice();

//get computer choice
function getComputerChoice() {
        const array = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * array.length);
        console.log(array[randomIndex]); //log computer choice to console
    }

    getComputerChoice();

function playRound(humanChoice, computerChoice){
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! you both picked ${playerSelection}`);
     }
     
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
       if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors");
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock");
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper");
     } humanScore++; 
     } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
     }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);