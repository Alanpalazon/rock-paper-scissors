
 const options = document.querySelectorAll('.img-options');
 let scores = [0,0]; //find a way to make local 


function randomNumber(min,max){
    let newRandNum = Math.floor(Math.random()*(max - min) + min);
    return newRandNum;
}

function computerPlay(){
    let computerSelect = options[randomNumber(0,3)];
    computerSelect = computerSelect.id
    console.log(computerSelect);
    return computerSelect
}

function playerPlay(){
    let playerAnswer = "hello";
    console.log(playerAnswer);
    return playerAnswer;    
}

function playRound(){ 
        let playerGo = playerPlay();
        let computerGo = computerPlay();
        computerGo;
        playerGo;
        if      (playerGo == computerGo){ console.log("It's a draw");
                console.log(`You: ${scores[0]} Computer: ${scores[1]}.`); return scores;} 
        else if (playerGo == options[0].id && computerGo == options[2].id){ console.log(`You win, insect kills snake!`); 
                scores[0]++; 
                console.log(`You: ${scores[0]} Computer: ${scores[1]}.`); return scores;}
        else if (playerGo == options[1].id && computerGo == options[0].id){ console.log(`You win, toad kills insect!`);
                scores[0]++;
                console.log(`You: ${scores[0]} Computer: ${scores[1]}.`); return scores;}
        else if (playerGo == options[2].id && computerGo == options[1].id){ console.log(`You win, snake kills toad!`);
                scores[0]++;
                console.log(`You: ${scores[0]} Computer: ${scores[1]}.`); return scores;}
        else{   console.log(`You lose, ${ computerGo } kills ${ playerGo}!`); 
                scores[1]++;
                console.log(`You: ${scores[0]} Computer: ${scores[1]}.`); return scores;}        
}
    



// // funtion to give choice whether to play again or quit game 
// function playAgain(){
//     let playAgain;
//     while(playAgain != "yes" && playAgain != "no"){
//         playAgain = prompt("Play again? Enter 'yes' or 'no'.");     
//         playAgain.toLowerCase();
//     }
//     if (playAgain == "yes"){ playGame(); return playAgain;}
//     else if (playAgain == "no"){ console.log("Thanks for playing. Bye!"); window.alert("Game over. Press refresh to start");} 
// }

 

function playGame(){ 
options.forEach(option => option.addEventListener('click', playRound));
    if      (scores[0] == 5){console.log("You win the game!");return}            
    else if (scores[1] == 5){console.log("Computer wins the game!"); return;}
    console.log(scores);
    return scores;
}

playGame();

