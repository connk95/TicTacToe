const makeBoard = (() => {

    const createPlayer = (player, sign, turn, ai) => {
        return {player, sign, turn, ai}
    };
    
    const player1 = createPlayer("1", "x", "true", "false");
    const player2 = createPlayer("2", "o", "false", "false");

    let turns = 0;
    const gameBoard = [];
    let xBoard = [];
    let oBoard = [];
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
                xBoard.push(thisTile.id);
            } else if (player2.turn == "true" && gameBoard.includes(thisTile.id) == false) {
                thisTile.innerHTML = player2.sign; 
                player2.turn = "false";
                player1.turn = "true";
                turns += 1;
                gameBoard.push(thisTile.id);
                oBoard.push(thisTile.id);
            };
            winCheck();
        });
    };

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

    winCheck = () => {
        for (let i = 0; i < wins.length; i++) {
            const winFormula = wins[i];
            let xWin = winFormula.every((win) => xBoard.includes(win));
            let oWin = winFormula.every((win) => oBoard.includes(win));

            if (xWin || oWin) {
                return xWin ? "x" : "o";
            };
            console.log(xWin);
        };
    };

})();


