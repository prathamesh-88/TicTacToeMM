import {equal3} from './gameOver.js';

export let evaluate = (board,depth) => {
    // Horizontal
    for (let i = 0; i < 7; i = i + 3) {
        if (equal3(i, i + 1, i + 2, board))
            if (board[i] == 0)
                return -10;
            else
                return +10 / depth;
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equal3(i, i + 3, i + 6, board))
            if (board[i] == 0){
                return -10;
            }else{
                return +10;
            }
                
    }
    //diagonal
    if (equal3(0, 4, 8, board) || equal3(2, 4, 6, board)){
                if (board[4] == 0)
                    return -10;
                else
                    return +10;
    }
    else{
        return 0;
    }

    
}