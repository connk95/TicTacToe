const makeBoard = (() => {

    const createPlayer = (player, sign, turn, ai, selectedTiles) => {
        return {player, sign, turn, ai, selectedTiles}
    };
    
    const player1 = createPlayer("1", "x", "true", "false", []);
    const player2 = createPlayer("2", "o", "false", "false", []);

    let turns = 0;
    const gameBoard = [];
    const tiles = document.getElementsByClassName("tile"); 
    for (i = 0; i < tiles.length; i++) {  
        let thisTile = document.getElementById(`${i}`);
        tiles[i].addEventListener("click", () => {
            if (player1.turn == "true" && gameBoard.includes(thisTile.id) == false) {
                thisTile.innerHTML = player1.sign; 
                player1.turn = "false";
                player2.turn = "true";
                turns += 1;
                gameBoard.push(thisTile.id);
                player1.selectedTiles.push(thisTile.id);
                winCheck(player1.selectedTiles);
            } else if (player2.turn == "true" && gameBoard.includes(thisTile.id) == false) {
                thisTile.innerHTML = player2.sign; 
                player2.turn = "false";
                player1.turn = "true";
                turns += 1;
                gameBoard.push(thisTile.id);
                player2.selectedTiles.push(thisTile.id);
                winCheck(player2.selectedTiles);
            };
            console.log(winCheck(player1.selectedTiles));
            console.log(winCheck(player2.selectedTiles));
        });
    };

    const winCheck = (selectedTiles) => {

        const output = false;

        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < wins.length; i++) {
            const winFormula = wins[i];
            const winTally = 0;

            for (let j = 0; j < winFormula.length; j++) {
                const eachSpot = winFormula[j];

                if (selectedTiles.includes(eachSpot)) {
                    winTally++;

                    if (winTally === 3) {
                        output = true;
                    };
                };
            };
        };

        return output;
    };
    winCheck(player1.selectedTiles);
    console.log(winCheck(player1.selectedTiles));

})();


