function solution(k, score) {
    var answer = [];
    var stack = [];
    
    
    for(let el of score) {
        if(stack.length < k) {
            stack.push(el);
            answer.push(Math.min(...stack));
        
        } else if(stack.length >= k) {
            if(el >= Math.min(...stack)) {
                
                let minIdx = stack.indexOf(Math.min(...stack));
                stack.splice(minIdx, 1);
                stack.push(el);
                answer.push(Math.min(...stack));
                
            } else {
                answer.push(Math.min(...stack));
            }
        }
    }
    
    return answer;
}