function solution(n, computers) {
    var answer = 0;
    var visited = new Array(n).fill(false);
    var cnt = 0;
    
    
    const bfs = (start, visited) => {
        let queue = [];
        queue.push(start);
        visited[start] = true;
        
        while(queue.length > 0) {
            let node = queue.shift();
            
            for(let i = 0; i < computers[node].length; i++) {
                if(computers[node][i] === 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        
        if(!visited[i]) {
            bfs(i, visited);
            cnt++;
        }
    }
    
    return cnt;
}