const makeBoard = (() => {

    const createPlayer = (player, sign, turn, ai, selectedTiles, wins) => {
        return {player, sign, turn, ai, selectedTiles, wins}
    };
    
    const player1 = createPlayer("1", "X", true, false, [], 0);
    const player2 = createPlayer("2", "O", false, false, [], 0);

    let turns = 0;
    let winner = null;
    let gameBoard = [];

    const allWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const displayWins = (xCount, oCount) => {
        const winDisplay = document.getElementById("wins");
        winDisplay.innerHTML = "X wins: " + xCount + " O wins: " + oCount;
    };
        
    const tiles = document.getElementsByClassName("tile"); 
    for (i = 0; i < tiles.length; i++) {  
        let thisTile = document.getElementById(`box${i}`);
        tiles[i].addEventListener("click", () => {
            // x player moves
            if (player1.turn == true && gameBoard.includes(thisTile.id.replace('box','')) == false && winner == null && thisTile.innerHTML == "") {
                thisTile.innerHTML = player1.sign; 
                player1.turn = false;
                player2.turn = true;
                turns ++;
                gameBoard.push(Number(thisTile.id.replace('box','')));
                player1.selectedTiles.push(Number(thisTile.id.replace('box','')));
                winCheck(player1.selectedTiles);
                if (winner !== null) {
                    resetGame();
                };
            
            // o player moves
            } else if (player2.turn == true && gameBoard.includes(thisTile.id.replace('box','')) == false && winner == null && thisTile.innerHTML == "") {
                thisTile.innerHTML = player2.sign; 
                player2.turn = false;
                player1.turn = true;
                turns ++;
                gameBoard.push(Number(thisTile.id.replace('box','')));
                player2.selectedTiles.push(Number(thisTile.id.replace('box','')));
                winCheck(player2.selectedTiles);
                if (winner !== null) {
                    resetGame();
                };  
            };
        });
    };

    const winCheck = (selectedTiles) => {

        for (let i = 0; i < allWins.length; i++) {
            const win = allWins[i];
            let winTally = 0;

            for (let j = 0; j < win.length; j++) {
                const eachSpot = win[j];

                if (selectedTiles.includes(eachSpot)) {
                    winTally++;
                };

                if (winTally === 3) {

                    if (turns % 2 !== 0) {
                        winner = "x";
                        player1.wins ++;
                    } else if (turns % 2 == 0) {
                        winner = "o";
                        player2.wins ++;
                    };

                } else if (winTally !==3 && gameBoard.length == 9) {
                    winner = "tie";
                };
            };
        };
        console.log(winner);
        return winner;
    };

    const resetGame = () => {
        
        const newGame = document.createElement("button");
        newGame.innerHTML = "New Game";

        const reset = document.getElementById("buttons");
        reset.appendChild(newGame);

        newGame.addEventListener("click", () => {
            for (i = 0; i < tiles.length; i++) {
                let thisTile = document.getElementById(`box${i}`);
                thisTile.innerHTML = "";
            };
            
            player1.selectedTiles = [];
            player1.turn = true;
            player2.selectedTiles = [];
            player2.turn = false;
            turns = 0;
            winner = null; 
            gameBoard = [];
            newGame.remove(newGame);
            displayWins(player1.wins, player2.wins);
        });

        const restart = document.getElementById("restart");
        restart.addEventListener("click", () => {
            for (i = 0; i < tiles.length; i++) {
                let thisTile = document.getElementById(`box${i}`);
                thisTile.innerHTML = "";
            };
            
            player1.selectedTiles = [];
            player1.turn = true;
            player1.wins = 0
            player2.selectedTiles = [];
            player2.turn = false;
            player2.wins = 0
            turns = 0;
            winner = null; 
            gameBoard = [];
            newGame.remove(newGame);
            displayWins(player1.wins, player2.wins);
        });
    };  
})();



