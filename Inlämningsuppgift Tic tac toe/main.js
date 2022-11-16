const player1 = "X";
const player2 = "O";
let winnerAnnounce = document.querySelector("#print");

let gameDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let clicks = 0;

const inputs = document.querySelectorAll("input");
let turn = 0;
let winStatus = false;

class CheckWin{
    constructor(gameDraws){
        this.gameDraws = gameDraws;
    }
    check(pos1, pos2, pos3){
        return this.gameDraws[pos1] === this.gameDraws[pos2] &&
      this.gameDraws[pos2] === this.gameDraws[pos3] &&
      this.gameDraws[pos1] !== 0;
    }
}

for (let input of inputs){
    input.addEventListener('click',(evt) =>{
        const id = evt.target.id;
        const box = evt.target;
        if (turn % 2 === 0){
            gameDraws = checkBoxes(gameDraws, player1, id, box);
            checkWinner(gameDraws, box);
        } else {
            gameDraws = checkBoxes(gameDraws, player2, id, box);
            checkWinner(gameDraws, box);
        }
         turn++;
        });
};

function checkBoxes (gameDraws, player, id, box){
    if (gameDraws[id[1]-1] === 0 && !winStatus){
        gameDraws[id[1]-1]= player; 
        box.value = player;
        clicks++;
    } else if (gameDraws[id[1]-1]=== "X" || gameDraws[id[1]-1] === "O") {
        turn--;
    }
    return gameDraws;
};

function checkWinner(gameDraws, box){
 const checkWin = new CheckWin(gameDraws);
   if (checkWin.check(0,1,2)=== true || checkWin.check(3,4,5)=== true || checkWin.check(6,7,8)=== true || checkWin.check(0,3,6)=== true || checkWin.check(1,4,7)=== true || checkWin.check(2,5,8) === true || checkWin.check(0,4,8)=== true || checkWin.check(2,4,6)=== true){
   winStatus = true; 
   if (box.value === "X"){
      winnerAnnounce.textContent = player1 + " won!";  
   } else if (box.value === "O"){
        winnerAnnounce.textContent = player2 + " won!"
   }
 }
   if (clicks >= 9 && !winStatus){
    winnerAnnounce.textContent = "It's a tie!";
  }
} 

const reset = document.querySelector("#but");


reset.addEventListener('click', () => {
    window.location.reload();
})

