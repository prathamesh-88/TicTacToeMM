export function reset() {
    $("#main").slideUp(500, function () {
        $(".box").removeClass("x");
        $(".box").removeClass("o");
        $(".box").removeClass("win");
        $("#main").slideDown(500);
        $("#winDisplay").fadeOut(400);
    });
    return [false, 9, 0, Array(9).fill(null)]; // gameOver,moves,turn
}

