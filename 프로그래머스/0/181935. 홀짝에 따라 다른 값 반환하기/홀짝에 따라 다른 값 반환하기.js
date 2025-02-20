function solution(n) {
    var answer = 0;
    
    if(n % 2 === 0) {
        for(let i = 0; i < n/2; i++) {
            answer += Math.pow(n - (i * 2), 2);
        }
    } else {
        for(let i = 0; i < Math.ceil(n/2); i++) {
            answer += n - (i * 2);
        }
    }
    
    
    return answer;
}