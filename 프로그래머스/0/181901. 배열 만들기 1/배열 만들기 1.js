function solution(n, k) {
    var answer = [];
    
    for(let i = 1; i <= n/k; i++) {
        answer.push(i * k);
        if(i * k > n) break;
    }
    
    
    
    return answer;
}