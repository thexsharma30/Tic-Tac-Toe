document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let reset = document.querySelector("#Reset");
    let newgamebtn = document.querySelector("#newBtn");
    let msgcontainer = document.querySelector(".Msg-container");
    let msg = document.querySelector("#msg");

    let turn0 = true;

    const win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const resetGame = () => {
        turn0 = true;
        enableBox();
        msgcontainer.classList.add("hide");
        msg.innerText = ""; // Reset message text
    };

    // Add event listeners to each box
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("Box Clicked !");
            if (turn0) {
                box.innerText = "X";
                turn0 = false;
            } else {
                box.innerText = "O";
                turn0 = true;
            }
            box.disabled = true;
            checkWin();
        });
    });

    const disableBox = () => {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    };

    const enableBox = () => {
        boxes.forEach((box) => {
            box.disabled = false;
            box.innerText = "";
        });
    };

    const showWinner = (Winner) => {
        msg.innerText = `Congratulations Babe, Winner - ${Winner}`;
        msgcontainer.classList.remove("hide");
        disableBox();
    };

    const checkWin = () => {
        for (let pattern of win) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("Winner", pos1val);
                    showWinner(pos1val);
                    return; // Stop checking for win if a winner is found
                }
            }
        }
    };

    newgamebtn.addEventListener("click", resetGame);
    reset.addEventListener("click", resetGame);
});
