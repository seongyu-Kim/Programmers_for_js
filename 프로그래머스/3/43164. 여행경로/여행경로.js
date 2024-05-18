function solution(tickets) {
    var answer = [];
    var visited = new Array(tickets.length).fill(false);
    
    //정렬
    tickets.sort((a, b) => {
        if(a[0] === b[0]) return a[1].localeCompare(b[1]);
        
        return a[0].localeCompare(b[0]);
    })
    
    const dfs = (cur, path) => {
        
        if(tickets.length + 1 === path.length) {
            answer = path;
            return true;
        }
        
        for(let i = 0; i < tickets.length; i++) {
            if(!visited[i] && cur === tickets[i][0]) {
                visited[i] = true;
                 if (dfs(tickets[i][1], path.concat(tickets[i][1]))) {
                    return true; 
                }
                visited[i] = false; 
            }
        }
    }
    
    
    dfs('ICN',['ICN']);
    
    
    return answer;
}