function solution(begin, target, words) {
    var visited = new Array(words.length).fill(false);

    //
    const check = (origin, compare) => {
        let cnt = 0;
        
        for(let i = 0; i < origin.length; i++) {
            if(origin[i] !== compare[i]){
                cnt++;
            }
            if(cnt > 1) return false;
        }
        return true;
    }
    
    if(!words.includes(target)) return 0;
    
    //bfs
    var queue = [];
    queue.push([begin, 0]);
    
    while(queue.length) {
        
        let [currWord, currCnt] = queue.shift();
        
        if(currWord === target) return currCnt;
        
        for(let i = 0; i < words.length; i++) {
            
            if(!visited[i] && check(currWord, words[i])) {
                visited[i] = true;
                queue.push([words[i], currCnt + 1]);
            }
        }
    }
    return 0;
}