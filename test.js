const array = ["rock", "paper", "scissors"].map(array => array.toLowerCase());//initialize array and map every element of the array to its lowercase counterpart.



/* PSEUDOCODE!
1. create a function getHumanChoice.
2. take user input for the same.
3. check if user has input a valid value, if not push an alert.
4. If yes, Return the element corresponding to that array.
5. log the output.
6. store it for later use.
*/




/* PSEUDOCODE!
1. create a function getComputerChoice.
2. Initialize an array with values “rock”, “paper” or “scissors”
3. Write a function to return a random value based on array length.
4. Return the element corresponding to that array.
5. log the output.
6. Save the output for use later.
*/

//Step 4: Declare the players score variables

/* PSEUDOCODE!
1. Declare the variables humanScore and computerScore.
2. Assign them a value of 0.
*/

let humanScore = 0;
let computerScore = 0;

//Step 5: Write the logic to play a single round
/* PSEUDOCODE!
1. Declare a function playRound.
2. function parameters: humanChoice and computerChoice.
3. take HumanChoice and COmputerChoice as arguments.
4. If user input is rock and computer input is scissors, 
or if user input is paper and computer input is rock,
or if user input is scissors and computer input is paper,
log a message saying You Win! ${humanChoice} wins over ${computerChoice}.
5. Increment humanScore by 1.
6. Else, log message saying "You lose! ${computerChoice} wins over ${humanChoice}".
Increment computerScore by 1.
*/

//Step 6: Write the logic to play the entire game

/* PSEUDOCODE!
1. Declare a function playGame.
2. Move everything into the game folder as they only need to be triggered once the game is triggered.
3. 

*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        const humanChoice = getHumanChoice(); // Get the human's choice for this round
        const computerChoice = getComputerChoice(); // Get the computer's choice for this round

        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);

       playRound(humanChoice, computerChoice);
    }

    //Step 3: Write the logic to get the human choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * array.length); //random number between 0 and array.length().
        return array[randomIndex];
    }
    
    //Step 2: Write the logic to get the computer choice.
    function getHumanChoice(){
        const userInput = prompt("Pick your choice: rock paper or scissors: ").toLowerCase();//get user input and convert it to lowercase.
        if (array.includes(userInput)){
            return userInput;
        } 
        else{
            alert("Enter a valid value!");
            return getHumanChoice();
        }
    }

    function playRound(humanChoice, computerChoice){

        if(humanChoice == computerChoice){
            console.log("It's a Tie!");
        }
        
        else if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")){
            console.log(`Round score: You Win! ${humanChoice} wins over ${computerChoice}`);
            humanScore +=1;
        }
        else {
            console.log(`You Lose! ${computerChoice} wins over ${humanChoice}`);
            computerScore +=1;
        }
        console.log(`Round score: Computer score is ${computerScore} and human score is ${humanScore}`); //log the scores as well
        return {humanScore, computerScore}; //return scores for each round
    }

    // Determine and log final winner
    if (humanScore > computerScore) {
        console.log("\nFinal Result: You win the game!");
    } else if (computerScore > humanScore) {
        console.log("\nFinal Result: Computer wins the game!");
    } else {
        console.log("\nFinal Result: It's a tie game!");
    }

    // Return final scores
    return {
        humanScore,
        computerScore
    };
}

// Call the playGame function to start the game
const finalScores = playGame();
console.log("\nFinal Scores:");
console.log(`Human: ${finalScores.humanScore}`);
console.log(`Computer: ${finalScores.computerScore}`);
