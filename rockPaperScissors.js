// //Glob vars 
const options = ["Toad", "Insect","Snake"];


//min and max will be 0 and 3 - this function will be called within computerPlay() 
function randomNumber(min,max){
    let newRandNum = Math.floor(Math.random()* (max - min) + min);
    return newRandNum;
}


function computerPlay(){
    let computerSelect = options[randomNumber(0,3)];
    console.log(computerSelect);
}


//FUNCTION UNFINISHED
// function playerPlay(){
//         let askUser = prompt("Please enter either 'toad', 'snake' or 'insect'");
//         let userAnswer = askUser.toUpperCase();
//         if (userAnswer == options[0] || userAnswer == options[1|| userAnswer == options[2]){
//             console.log(`You chose ${ userAnswer}`);
//         } else askUser;
        
//     return askUser;
// }


// computerPlay() & playerPlay() need to be passed as params for playRound()
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("It's a draw") //add score increment 
    } 
    else if (playerSelection === options[0] && computerSelection === options[1]){ console.log("You win, Toad kills Insect!")}//add score increment 
    else if (playerSelection === options[1] && computerSelection === options[2]){ console.log("You win, Insect kills Snake!")}//add score increment
    else if (playerSelection === options[2] && computerSelection === options[0]){ console.log("You win, Snake kills Toad!")}//add score increment

    else console.log(`You lose, ${ computerSelection } kills ${ playerSelection}!`);//add score increment     

}
