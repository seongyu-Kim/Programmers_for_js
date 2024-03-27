function solution(n) {
    var answer = 0;
    var arr = [];
    arr = n.toString().split('')
    
    
    for(let el of arr) {
        answer += parseInt(el);
    }
    
    return answer;
        
}