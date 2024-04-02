function solution(n) {
    var answer = new Array(n.length);
    n = n.toString();
    let i = n.length - 1;
    
    for(let el of n) {
        answer[i] = parseInt(el);
        i--;
    }
    
    return answer;
}