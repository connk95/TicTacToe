const makeBoard = (() => {

    const createPlayer = (player, sign, turn, ai) => {
        // const playerNumber = () => player
        // const getSign = () => sign;
        // const myTurn = () => turn;
        // const isAI = () => ai
        
        return {player, sign, turn, ai}
    };
    
    const player1 = createPlayer("1", "x", "true", "false");
    const player2 = createPlayer("2", "o", "false", "false");
    console.log(player1);
    console.log(player2);

    let turns = 0;
    const tiles = document.getElementsByClassName("tile"); 
    for (i = 0; i < tiles.length; i++) {  
    tiles[i].addEventListener("click", () => {
        
        console.log(tiles[i]);
        if (player1.turn == "true" && this.className == "tile") {
            tiles[i].className = "x"; 
            player1.turn = "false";
            player2.turn = "true";
            turns += 1;
        } else if (player2.turn == "true" && tiles[i].className == "tile") {
            tiles[i].className = "o"; 
            player2.turn = "false";
            player1.turn = "true";
            turns += 1;
        };
        //checkWin();
    });
};

    // const checkWin = () => {

    //     if (tile1 == Tiles[1] && Tiles[0] == Tiles[2]) {
    //         console.log("test");
    //     }

    // };

    // const checkTurns = () => {
    //     if (turns == 3) {
    //         for (i = 0; i < tile.length; i++) {
    //             tile[i].innerHTML = "";
    //         }
    //     }
    // };
    
    //const checkWin

    // return {
    //     checkWin,
    //     checkTurns
    // };
})();

// makeBoard.checkWin();
// makeBoard.checkTurns();



// (column0[i] = column1[i] = column2[i])

// (column0[0] = column1[1] = column2[2])

// (column0[2] = column1[1] = column2[0])

// (column0[0] = column0[1] = column0[2])

// (column1[0] = column1[1] = column1[2])

// (column2[0] = column2[1] = column2[2])


