//create an array to store the gameboard using a module; [x,x,x;x,x,x;,x,x,x]

// let gameBoard = [x,o,x,
//                  o,x,o,
//                  o,x,o];

//create players using a factory function

// const createPlayer = (sign) => {
//     const xButton = document.getElementById("xButton");
//     const oButton = document.getElementById("oButton");
//     const getSign = () => {
//         xButton.addEventListener("click", () => {
//             if (player1 = undefined) {
//                 sign = x;
//             } else {
//                 alert("You have already selected your signs!");
//             }
//         });
//         oButton.addEventListener("click", () => {
//             if (player1 = undefined) {
//                 sign = o;
//             } else {
//                 alert("You have already selected your signs!");
//             }
//         });

//     }
//     return{getSign};
// };
//   //add button id as sign in factory function

// const player1 = createPlayer("player 1", xButton.innerHTML);
// const player2 = createPlayer("player 2", o);

const createPlayer = {
    const playerSign = () => 
}

// const player1 = createPlayer(player1, x)

// const player2 = Player(player2, o)

//create a function to draw the game board onto the page usine DOM



const makeBoard = (() => {
    const board = document.getElementById("board");
    const makeColumns = () => {
        console.log("test");
        for (i = 0; i < 3; i++) {
            let column = document.createElement("div");
            board.appendChild(column).className = "boardColumn";
        }
    };

    const column = document.getElementsByClassName("boardColumn");

    const makeTiles = () => {
        for (j = 0; j < 3; j++) {  
            for (k = 0; k < 3; k++) {
                let tile = document.createElement("tile");
                column[k].appendChild(tile).className = "tile";
                tile.addEventListener("click", () => {
                    console.log("test");
                    tile.innerHTML = "x"; 
                });
            }
        }
    };

    return {
        makeColumns,
        makeTiles,
    };
})();

makeBoard.makeColumns();
makeBoard.makeTiles();


    //create a function to mark a tile using mouseDown event
    //players cannot mark the same tile twice; if (tile is occupied)...

//create a condition to tell if a player has won
    //this can be a function which is called every time a player selects a tile;
    //the function will check if there are 3 same in a row, if not, nothing will happen
    //additionally, when there are 3 in a row, launch a message

//create a button to restart game