function solution(maps) {
    var answer = 0;
    
    //상 하 좌 우
    //[0, 1], [0, -1], [-1, 0], [1, 0]; 
    const dirX = [0, 1, 0, -1];
    const dirY = [1, 0, -1, 0];
    
    const xLen = maps.length;
    const yLen = maps[0].length;
    
    const goalX = xLen - 1;
    const goalY = yLen - 1;
    
    const queue = [];
    queue.push([0, 0, 1]);
    
    
    while(queue.length) {
        const [curX, curY, mov] = queue.shift();
        
        if(goalX === curX && goalY === curY) return mov;
        
        for(let i = 0; i < 4; i++) {
            
            const nextX = curX + dirX[i];
            const nextY = curY + dirY[i];
            
            if(nextX >= 0 && nextX < xLen && nextY >= 0 && nextY < yLen && maps[nextX][nextY] === 1) {
                queue.push([nextX, nextY, mov + 1]);
                maps[nextX][nextY] = 0;
                
            }
        }
    }
    
    
    return -1;
}