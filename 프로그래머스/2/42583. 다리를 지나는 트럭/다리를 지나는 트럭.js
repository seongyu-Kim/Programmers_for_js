function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var que = new Array(bridge_length).fill(0);
    let sum = 0;
    let cur = truck_weights.shift();
    
    que.splice(0, 1);
    que.push(cur);
    sum += cur;
    answer++;
    
    while(sum) {
        
        sum -= que.shift();
        let cur = truck_weights.shift();
        
        if(sum + cur <= weight) {
            que.push(cur);
            sum += cur;
            
        } else {
            que.push(0);
            truck_weights.unshift(cur);
        }
        answer++;
        
    }
    
    
    return answer;
}