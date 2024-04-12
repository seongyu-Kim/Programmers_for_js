function solution(board) {
    var answer = 0;
    var arrSize = board.length; 
    var bomb = []; 
    var danger = [[0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], 
                  [1, 1]] 
    
    for(let i = 0; i < arrSize; i++) {
        for(let j = 0; j < arrSize; j++) {
            if(board[i][j] === 1) {
                bomb.push([i, j]);
                // boardSize--; 
            }
        }
    }
    // if(boardSize == 0) return 0;
    
    for(let k = 0; k < 8; k++) {
        bomb.map((x) => {
            let [a, b] = [x[0] + danger[k][0], x[1] + danger[k][1]];
            if(a >= 0 && a < arrSize && b >= 0 && b < arrSize) {
                board[a][b] = -1;
            }
            
        });
    }
    
    for(let el1 of board) {
        for(let el2 of el1){
            if(el2 === 0) answer++;
        }
    }
    
    return answer;
}