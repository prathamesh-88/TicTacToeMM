export function reset() {
    $("#main").slideUp(500, function () {
        $(".box").removeClass("x");
        $(".box").removeClass("o");
        $(".box").removeClass("win");
        $("#main").slideDown(500);
        $("#winDisplay").fadeOut(400);
        $('button').css({
            'background-color': 'none'
        });
    });
    return [false, 9, 0, Array(9).fill(null)]; // gameOver,moves,turn
}

