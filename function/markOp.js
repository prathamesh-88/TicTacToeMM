import {minimax} from './minimax.js'

let bestMove = (board) =>{
    let bmove = {
        move: -99,
        val: -1000
    }
    for(let i = 0; i < 9; i++){
        if(board[i]==null){
            board[i] = 1;
            let moveVal = minimax(board, 0, false);
            if (moveVal > bmove.val) {
                bmove.move = i;
                bmove.val = moveVal;
            }
            board[i] = null;
        }
    }
    return bmove.move;
}

export let markOp = (board)=>{
    console.log(`entry = ${board}`);
    let i = bestMove(board);
    board[i]=1;
    $(`#${i}`).addClass('o');
    console.log(`inmarkOp = ${board}`);
    return board;
}




