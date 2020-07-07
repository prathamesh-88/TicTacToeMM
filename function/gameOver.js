function gameWin(query, winArr) {
    let win = query;
    (query == 0)? win = 'Player' : win = "Computer"
    $("#winDisplay").text(win + " wins the game!!!");
    $("#winDisplay").fadeIn(400);
    winArr.forEach(e => {
        $("#" + e).addClass("win");
    });
    $("span").removeClass("active");
}

export function draw() {
    $("#winDisplay").text("The game is a draw");
    $("#winDisplay").fadeIn(400);
    return true;
}

export function equal3(a,b,c,board) {
    return (( board[a] == board[b] && board[b] == board[c] ) && board[a] != null)
}

export function isGameOver(board) {
    let gameOver = true;
    if (equal3(0, 1, 2,board))
        gameWin(board[0], [0, 1, 2]);

    else if (equal3(3, 4, 5,board))
        gameWin(board[3], [3, 4, 5]);

    else if (equal3(6, 7, 8,board))
        gameWin(board[6], [6, 7, 8]);

    else if (equal3(0, 3, 6,board))
        gameWin(board[0], [0, 3, 6]);

    else if (equal3(1, 4, 7,board))
        gameWin(board[1], [1, 4, 7]);

    else if (equal3(2, 5, 8,board))
        gameWin(board[2], [2, 5, 8]);

    else if (equal3(0, 4, 8,board))
        gameWin(board[0], [0, 4, 8]);

    else if (equal3(2, 4, 6,board))
        gameWin(board[2], [2, 4, 6]);

    else
        gameOver = false;

    return gameOver;

}