export function reset() {
    $("#main").slideUp(500, function () {
        //let gameOver = false;
        //let moves = 9;
        $("span").removeClass("active");
        $(".box").removeClass("x");
        $(".box").removeClass("o");
        $(".box").removeClass("win");
        $("#p1Indicator").addClass("active");
        $("#main").slideDown(500);
        $("#winDisplay").fadeOut(400);
    });
    //let turn = 0;

    return [false, 9, 0, Array(9).fill(null)]; // gameOver,moves,turn
}

