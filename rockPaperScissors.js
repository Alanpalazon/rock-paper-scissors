// //Glob vars 
const options = ["toad", "insect","snake"];



//FUNCTIONS 

//random number generator for computer turn 
function randomNumber(min,max){
    let newRandNum = Math.floor(Math.random()* (max - min) + min);
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



// function to play single round 
function playRound(playerSelection, computerSelection){
        let playerScore = 0;
        let compScore = 0;
        if      (playerSelection == computerSelection){ console.log("It's a draw");
           console.log(`You: ${ playerScore } Computer: ${compScore}.`);} 
        else if (playerSelection == options[0] && computerSelection == options[1]){ console.log(`You win, ${playerSelection} kills ${computerSelection}`); 
                  playerScore++; 
                  console.log(`You: ${ playerScore } Computer: ${compScore}.`);}
        else if (playerSelection == options[1] && computerSelection == options[2]){ console.log(`You win, ${playerSelection} kills ${computerSelection}!`);
                  playerScore++;
                  console.log(`You: ${ playerScore } Computer: ${compScore}.`);}
        else if (playerSelection == options[2] && computerSelection == options[0]){ console.log(`You win, ${playerSelection} kills ${computerSelection}!`);
                  playerScore++;
                  console.log(`You: ${ playerScore } Computer: ${compScore}.`);}
        else{    console.log(`You chose ${ playerSelection}. You lose, ${ computerSelection } kills ${ playerSelection}!`); 
                  compScore++;
                  console.log(`You: ${ playerScore } Computer: ${compScore}.`);}  
    }
        





        
       
 

//FUNCTION CALLS





