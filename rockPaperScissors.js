// Basic console game complete - will need a lot of changes before publishable 

//Glob vars 
const options = ["toad", "insect","snake"];



//FUNCTIONS 

//random number generator for computer turn 
function randomNumber(min,max){
    let newRandNum = Math.floor(Math.random()*(max - min) + min);
    return newRandNum;
}


//computer randomly chooses 
function computerPlay(){
    let computerSelect = options[randomNumber(0,3)];
    return computerSelect;
}


//player inputs choice - Need to add null handling 
function playerPlay(){
    let playerAnswer = prompt("Please enter either 'toad', 'snake' or 'insect'");
    playerAnswer = playerAnswer.toLowerCase();
    while(playerAnswer !== options[0] && playerAnswer !== options[1] && playerAnswer !== options[2]){
          playerAnswer = prompt("Try again");
          playerAnswer = playerAnswer.toLowerCase();} 
    if(playerAnswer === options[0] || playerAnswer === options[1] || playerAnswer === options[2]){console.log(`You choose ${ playerAnswer}.`); return playerAnswer;}  
}



// game loop function -- Too lazy to change but loop may also work by just using playerPlay() and computerPlay() without storing them as variables
// also null handling not working?????
function playGame(){
        let playerScore = 0;
        let compScore = 0;
        do{  
            let playerGo = playerPlay();
            let computerGo = computerPlay();
            computerGo;
            playerGo;
            if      (playerGo == computerGo){ console.log("It's a draw");
                    console.log(`You: ${ playerScore } Computer: ${compScore}.`);} 
            else if (playerGo == options[0] && computerGo == options[1]){ console.log(`You win, ${playerGo} kills ${computerGo}`); 
                    playerScore++; 
                    console.log(`You: ${ playerScore } Computer: ${compScore}.`);}
            else if (playerGo == options[1] && computerGo == options[2]){ console.log(`You win, ${playerGo} kills ${computerGo}!`);
                    playerScore++;
                    console.log(`You: ${ playerScore } Computer: ${compScore}.`);}
            else if (playerGo == options[2] && computerGo == options[0]){ console.log(`You win, ${playerGo} kills ${computerGo}!`);
                    playerScore++;
                    console.log(`You: ${ playerScore } Computer: ${compScore}.`);}
            else{   console.log(`You lose, ${ computerGo } kills ${ playerGo}!`); 
                    compScore++;
                    console.log(`You: ${ playerScore } Computer: ${compScore}.`);}    
            if      (playerScore == 5){console.log("You win the game!"); playAgain();}            
            else if (compScore == 5){console.log("Computer wins the game!"); playAgain();}
            } while (playerScore < 5 || compScore < 5);     
    }

 

//funtion to give choice whether to play again or quit game 
function playAgain(){
    let playAgain;
    while(playAgain != "yes" && playAgain != "no"){
        playAgain = prompt("Play again? Enter 'yes' or 'no'.");     
        playAgain.toLowerCase();
    }
    if (playAgain == "yes"){ playGame(); return playAgain;}
    else if (playAgain == "no"){ console.log("Thanks for playing. Bye!"); window.alert("Game over. Press refresh to start");} 
}
 

//FUNCTION CALLS


playGame();



