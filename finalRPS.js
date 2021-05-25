

function randomNumber(min,max){
    let newRandNum = Math.floor(Math.random()*(max - min) + min);
    return newRandNum;
}

function computerPlay(){
    let computerSelect = options[randomNumber(0,3)];
    computerSelect = computerSelect.id
    return computerSelect
}


function playRound(){ 
        const announcement = document.getElementById('announcement');
        const player = document.getElementById('player');
        const computer = document.getElementById('computer');
        let playerGo = this.id;
        let computerGo = computerPlay();
        if      (playerGo == computerGo){ announcement.textContent = "It's a draw";
                player.textContent = `PLAYER: ${ scores[0]}`; computer.textContent = `COMPUTER: ${ scores[1]}`;} 
        else if (playerGo == options[0].id && computerGo == options[2].id){ announcement.textContent = `You win, ${playerGo} kills ${computerGo}!`; 
                scores[0]++; 
                player.textContent = ` PLAYER: ${ scores[0]}`; computer.textContent = ` COMPUTER: ${ scores[1]}`; 
                announcement.textContent = `You win, ${playerGo} kills ${computerGo}!`;}
        else if (playerGo == options[1].id && computerGo == options[0].id){ 
                scores[0]++;
                player.textContent = ` PLAYER: ${ scores[0]}`; computer.textContent = ` COMPUTER: ${ scores[1]}`; 
                announcement.textContent = `You win, ${playerGo} kills ${computerGo}!`;}
        else if (playerGo == options[2].id && computerGo == options[1].id){ 
                scores[0]++;
                player.textContent = `PLAYER: ${ scores[0]}`; computer.textContent = `COMPUTER: ${ scores[1]}`; 
                announcement.textContent = `You win, ${playerGo} kills ${computerGo}!`;}
        else{   announcement.textContent =`You lose, ${ computerGo } kills ${ playerGo}!`; 
                scores[1]++;
                player.textContent = `PLAYER: ${ scores[0]}`; computer.textContent = `COMPUTER: ${ scores[1]}`;}    
                
        if      (scores[0] == 5 || scores[1] == 5){
                        if(scores[0] == 5){
                              
                                announcement.textContent = `You win, ${playerGo} kills ${computerGo }!  You win the game!`;
                                // playAgain();
                        }else if(scores[1] == 5){
                             
                                announcement.textContent = `You loose, ${computerGo} kills ${playerGo }! You loose the game!`;;
                                // playAgain();
                        }
        }             
        
}

//need to ass event listener to button 
function playAgain(){
     
       const playAgain = document.createElement('button');
       playAgain.textContent = "Play Again";
       playAgain.style.cssText = "backgroundColor: rgba(19, 148, 106); borderRadius: 3px; width: 20%; height: 5%; margin: 0 auto";
       document.getElementById('gamecontainer').appendChild(playAgain);
       //playRound();
       return;
}
    

// function removeClick(){
        
//         return 1;
// }

// let remove = true;
let scores = [0,0]; 
const options = document.querySelectorAll('.img-options');
options.forEach(option => option.addEventListener('click', playRound));
// if(remove){options.forEach(option => option.removeEventListener('click', removeClick));}

 




