const createPlayer = (sign) => {
    const getSign = () => sign;
    const turnsPlayed = () => 0;
    const nextTurn = turnsPlayed => {
        turnsPlayed += 1;
    }
    
    return {getSign, turnsPlayed, nextTurn}
};

const player1 = createPlayer("x");
const player2 = createPlayer("o");
console.log(player1);
console.log(player2);

const makeBoard = (() => {
    const board = document.getElementById("board");
    const makeColumns = () => {
        for (i = 0; i < 3; i++) {
            let column = document.createElement("div");
            board.appendChild(column).className = "boardColumn";
            column.id = `column${i}`;
        }
    };

    const column = document.getElementsByClassName("boardColumn");

    let turns = 0;
    const makeTiles = () => {
        for (j = 0; j < 3; j++) {  
            for (k = 0; k < 3; k++) {
                let tile = document.createElement("tile");
                column[k].appendChild(tile).className = "tile";
                tile.addEventListener("click", () => {
                    if (turns % 2 == 0 && tile.innerHTML == "") {
                        tile.innerHTML = "x"; 
                        player1.nextTurn;
                        turns += 1;
                    } else if (turns % 2 !== 0 && tile.innerHTML == "") {
                        tile.innerHTML = "o"; 
                        player2.nextTurn;
                        turns += 1;
                    }
                });
            }
        }
    };

    const checkTurns = () => {
        if (turns == 3) {
            for (i = 0; i < tile.length; i++) {
                tile[i].innerHTML = "";
            }
        }
    };
    
    //const checkWin

    return {
        makeColumns,
        makeTiles,
        checkTurns
    };
})();

makeBoard.makeColumns();
makeBoard.makeTiles();
makeBoard.checkTurns();


// (column0[i] = column1[i] = column2[i])

// (column0[0] = column1[1] = column2[2])

// (column0[2] = column1[1] = column2[0])

// (column0[0] = column0[1] = column0[2])

// (column1[0] = column1[1] = column1[2])

// (column2[0] = column2[1] = column2[2])


