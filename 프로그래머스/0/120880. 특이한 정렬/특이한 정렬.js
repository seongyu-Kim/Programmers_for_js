function solution(numlist, n) {
    var answer = [...numlist].sort((a, b) => b - a);
    
    answer.sort((a, b) => Math.abs(a-n) - Math.abs(b-n));
    
    
    return answer;
}