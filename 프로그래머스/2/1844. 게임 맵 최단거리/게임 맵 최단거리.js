function solution(maps) {
    var answer = -1;
    const xGoal = maps.length - 1;
    const yGoal = maps[0].length - 1;
    
    const dir1 = [1, -1, 0, 0];
    const dir2 = [0, 0, 1, -1];
    
    let queue = [[0, 0, 1]];
    
    while (queue.length) {
        
        let [x, y, mov] = queue.shift();
        
        if(x === xGoal && y === yGoal) return mov;
    
        for(let i = 0; i < 4; i++) {
            
            let nx = x + dir1[i];
            let ny = y + dir2[i];
            
            if(nx >= 0 && nx <= xGoal && ny >= 0 && ny <= yGoal && maps[nx][ny] === 1) {
                
                queue.push([nx, ny, mov + 1]);
                maps[nx][ny] = 0;
            }
        }
    }
    
    
    
    
    return answer;
}