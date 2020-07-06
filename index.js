// 0 for x
// 1 for O
import {reset} from './function/reset.js';
import {isGameOver,draw} from './function/gameOver.js';

let turn = 0;
let gameOver = false;
let moves = 9;
let board = Array(9).fill(null);
console.log(board)


$(".box").on("click", function () {
    if (!($(this).hasClass("box x") || $(this).hasClass("box o")) && !gameOver) {
        $("span").removeClass("active");
        if (!turn) {
            $("#p2Indicator").addClass("active");
            $(this).addClass("x");
            board[Number($(this).attr('id'))]= 0;
        } else {
            $("#p1Indicator").addClass("active");
            $(this).addClass("o");
            board[Number($(this).attr('id'))] = 1;
        }
        turn = !turn;
        moves--;
    }
    if (moves == 0)
        gameOver = draw();
    gameOver = isGameOver();
    console.log(board);
});


$("#reset").on("click", ()=>{
    [gameOver, moves, turn,board] = reset();
});
