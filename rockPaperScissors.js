// //Glob vars 
const options = ["Toad", "Insect","Snake"];



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


//player inputs choice
function playerPlay(playerAnswer){
    while(playerAnswer !== options[0] && playerAnswer !== options[1] && playerAnswer !== options[2]){
          playerAnswer = prompt("Please enter either 'toad', 'snake' or 'insect'");
          playerAnswer = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1);} 
    if(playerAnswer === options[0] || playerAnswer === options[1] || playerAnswer === options[2]){console.log(`You choose ${ playerAnswer}.`); return playerAnswer;}  
    if(playerAnswer == null || playerAnswer == undefined){console.log("You forfeited the round")};
}


// function to play single round 
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){ console.log("It's a draw")} //need to add score increment 
    else if (playerSelection == options[0] && computerSelection == options[1]){ console.log("You win, Toad kills Insect!")}//need to add score increment 
    else if (playerSelection == options[1] && computerSelection == options[2]){ console.log("You win, Insect kills Snake!")}//need to add score increment
    else if (playerSelection == options[2] && computerSelection == options[0]){ console.log("You win, Snake kills Toad!")}//need to add score increment
    else console.log(`You chose ${ playerSelection}. You lose, ${ computerSelection } kills ${ playerSelection}!`);//need to add score increment     
}


// //function game(param){ //willl need loop until score of 5 by either player

// }

//FUNCTION CALLS

playRound(playerPlay(), computerPlay());

