function solution(priorities, location) {
    var answer = 0;
    
    while(priorities.length) {
        let max = Math.max(...priorities);
        let cur = priorities.shift();
        
        if(max === cur) {
            answer++;
            
            if(location === 0) return answer;
            console.log(answer);
            
        } else if(max !== cur) {
            
            priorities.push(cur);
            
        }
        
        if(location === 0) location = priorities.length - 1;
        else location--;
        
        
    }
    
    return -1;
    
}