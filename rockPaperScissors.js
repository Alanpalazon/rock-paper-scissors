// //Glob vars 
const options = ["Toad", "Insect","Snake"];


//min and max will be 0 and 3 - this function will be called within computerPlay() 
function randomNumber(min,max){
    let newRandNum = Math.floor(Math.random()* (max - min) + min);
    return newRandNum;
}


function computerPlay(){
    let computerSelect = options[randomNumber(0,3)];
    return computerSelect;
}


function userInput(){ //call this function within playerPlay()
    let askUser = prompt("Please enter either 'toad', 'snake' or 'insect'");
    let userAnswer = askUser.charAt(0).toUpperCase() + askUser.slice(1);
    return userAnswer; 
}


// //FUNCTION UNFINISHED - Need to add error handling and test 
// function playerPlay(playerAnswer){
//        try{ if (playerAnswer != options[0] || playerAnswer != options[1]|| playerAnswer != options[2])
           
//        catch{ userInput() }
       
//             // console.log(`You chose ${ playerAnswer}`);          
//             // return playerAnswer;   
// }






// function working
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){ console.log("It's a draw")} //add score increment 
    else if (playerSelection == options[0] && computerSelection == options[1]){ console.log("You win, Toad kills Insect!")}//add score increment 
    else if (playerSelection == options[1] && computerSelection == options[2]){ console.log("You win, Insect kills Snake!")}//add score increment
    else if (playerSelection == options[2] && computerSelection == options[0]){ console.log("You win, Snake kills Toad!")}//add score increment

    else console.log(`You chose ${ playerSelection}. You lose, ${ computerSelection } kills ${ playerSelection}!`);//add score increment     

}

// playRound(playerPlay(), computerPlay());