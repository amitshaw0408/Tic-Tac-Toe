let winPtn = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];
let resBtn = document.querySelector("#reset-btn");
let win = document.querySelector(".hide");
let btn = document.querySelectorAll(".box");
let turnX = true;

const reset = () => {
    turnX = true;
    restGame();
}


let restGame = () => {
     for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
        win.classList.add ("hide");
        resBtn.innerText = "Reset Game";
    }};


resBtn.addEventListener ("click", reset);


btn.forEach ((box) => {
    box.addEventListener("click", () => {
        if (turnX === true) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner()
    }); 
}) ;


const showWinner = (winner) => {
    win.innerText = `Congratulation winner is ${winner}`;
    win.classList.remove ("hide");
    resBtn.innerText = "New Game";

};

const disbox = () => {
    for (let box of btn) {
    box.disabled = true;
    }
};

    const checkWinner = () => {
    for (let ptn of winPtn) {
     
    let pos1 = btn[ptn[0]].innerText;
    let pos2 = btn[ptn[1]].innerText;
    let pos3 = btn[ptn[2]].innerText;

if (pos1 != "" && pos2 != "" && pos3 != "") 
        if (pos1 === pos2 && pos2 === pos3) {
            console.log("Winner!", pos1);
            showWinner(pos1);  
            disbox();     
        }
    }
};


