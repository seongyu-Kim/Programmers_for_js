function solution(n) {
    var answer = [];
    var sqrt = Math.sqrt(n);
    
    for(let i = 1; i <= sqrt; i++) {
        if(n % i == 0) {
            answer.push(i);
            if(sqrt != i) {
                answer.push(n / i);
            }
        }
    }
    
    
    
    
    return answer.sort((a, b) => a - b);
}