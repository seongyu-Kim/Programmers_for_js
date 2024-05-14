function solution(prices) {
    var answer = [];
    
    for(let i = 0; i < prices.length; i++) {
        
        let second = 0;
        for(let j = i + 1; j < prices.length; j++) {
            
            if(prices[i] > prices[j]) {
                second++;
                break;
            } else if(prices[i] <= prices[j]) {
                second++;
            }
        }
        answer.push(second);
        
    }
    
    return answer;
}