function gameWin(query, winArr) {
    let win = "";
    (query == "box x") ? win = "1": win = "2";
    $("#winDisplay").text("Player " + win + " wins the game!!!");
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


export function isGameOver() {
    let gameOver = true;
    if ($("#0").attr("class") == $("#1").attr("class") &&
        $("#1").attr("class") == $("#2").attr("class") && $("#2").attr("class") != "box")
        gameWin($("#2").attr("class"), [0, 1, 2]);

    else if ($("#3").attr("class") == $("#4").attr("class") &&
        $("#4").attr("class") == $("#5").attr("class") && $("#5").attr("class") != "box")
        gameWin($("#5").attr("class"), [3, 4, 5]);

    else if ($("#6").attr("class") == $("#7").attr("class") &&
        $("#7").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
        gameWin($("#8").attr("class"), [6, 7, 8]);

    else if ($("#0").attr("class") == $("#3").attr("class") &&
        $("#3").attr("class") == $("#6").attr("class") && $("#6").attr("class") != "box")
        gameWin($("#6").attr("class"), [0, 3, 6]);

    else if ($("#1").attr("class") == $("#4").attr("class") &&
        $("#4").attr("class") == $("#7").attr("class") && $("#7").attr("class") != "box")
        gameWin($("#7").attr("class"), [1, 4, 7]);

    else if ($("#2").attr("class") == $("#5").attr("class") &&
        $("#5").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
        gameWin($("#8").attr("class"), [2, 5, 8]);

    else if ($("#0").attr("class") == $("#4").attr("class") &&
        $("#4").attr("class") == $("#8").attr("class") && $("#8").attr("class") != "box")
        gameWin($("#8").attr("class"), [0, 4, 8]);

    else if ($("#2").attr("class") == $("#4").attr("class") &&
        $("#4").attr("class") == $("#6").attr("class") && $("#6").attr("class") != "box")
        gameWin($("#6").attr("class"), [2, 4, 6]);

    else
        gameOver = false;

    return gameOver;

}