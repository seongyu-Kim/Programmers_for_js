function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    
    d.sort((a, b) => a - b);
    
    // console.log(d);
    
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        
        if(sum > budget) {
            answer = i;
            break;
        } else if (sum == budget){
            answer = i + 1;
            break;
        } else {
            answer = i + 1;
        }
        
        console.log(sum, "idx: ", i);
    }
    
    return answer;
}