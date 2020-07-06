export let markOp = (board)=>{
    for(let i=0;i<9;i++)
    {
        if(board[i]==null)
        {
            board[i]=1;
            $(`#${i}`).addClass('o');
            break;
        }
    }
    return board;
}