// 0 for x
// 1 for O
import {reset} from './function/reset.js';
import {isGameOver,draw} from './function/gameOver.js';
import { markOp } from './function/markOp.js';
import {evaluate } from './function/evaluate.js'
import {equal3} from './function/gameOver.js';

let turn = 0;
let gameOver = false;
let moves = 9;
let board = Array(9).fill(null);




$(".box").on("click", function () {
    if (!turn & (!($(this).hasClass("box x") || $(this).hasClass("box o")) && !gameOver)) {
        $(this).addClass("x");
        board[Number($(this).attr('id'))] = 0;
        turn = 1;
        gameOver = isGameOver(board);
        if(!gameOver){
          setTimeout(() => {
              board = markOp(board);
              gameOver = isGameOver(board);
              turn = 0;
          }, 300);  
        }

        moves -= 2;
        if (moves <= 0)
            gameOver = draw();
    }
});


$("#reset").on("click", ()=>{
    [gameOver, moves, turn,board] = reset();
});

$('#main').css({
    'height': ` ${$('#main').width()} px`
});
