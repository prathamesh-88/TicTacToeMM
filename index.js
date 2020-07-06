// 0 for x
// 1 for O
import {reset} from './function/reset.js';
import {isGameOver,draw} from './function/gameOver.js';
import { markOp } from './function/markOp.js';

let turn = 0;
let gameOver = false;
let moves = 9;
let board = Array(9).fill(null);
console.log(board);
//let name = prompt('Enter your name');

//$("#p1Indicator").text(name);

$(".box").on("click", function () {
    if (!($(this).hasClass("box x") || $(this).hasClass("box o")) && !gameOver) {
        $(this).addClass("x");
        board[Number($(this).attr('id'))] = 0;
        board = markOp(board);
        moves -= 2;
    }
    if (moves == 0)
        gameOver = draw();
    gameOver = isGameOver(board);
    console.log(board);
});


$("#reset").on("click", ()=>{
    [gameOver, moves, turn,board] = reset();
});
