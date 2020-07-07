import {evaluate} from './evaluate.js'

const areMovesLeft = (board) => {
    for(let i =0; i < 9; i++){
        if(board[i] == null)
            return true;
    }
    return false;
}
export const minimax = (board, depth,isMax) =>{
    let score = evaluate(board);
    if(score == 10)
        return score;

    if(score == -10)
        return score;

    if (!areMovesLeft(board))
        return 0;

    if(isMax){
        let best = -1000;
        for(let i = 0; i < 9 ;i++){
            if( board[i] == null){
                board[i] = 1;       //Temporary Assignment
                best = Math.max(best,minimax(board,depth+1,!isMax));
                board[i] = null;   //Reset Value
            }
        }
        return best;
    }
    else{
        let best = 1000;
        for (let i = 0; i < 9; i++) {
            if (board[i] == null) {
                board[i] = 0; //Temporary Assignment
                best = Math.min(best, minimax(board,depth+1, !isMax));
                board[i] = null; //Reset Value
            }
        }
        return best;
    }


}