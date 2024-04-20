function solution(num, total) {
    var answer = [];
    var a = 0;
    
    a = (((total * 2) / num) - (num - 1)) / 2;
    
    
    for(let i = 0; i < num; i++) {
        answer.push(a + i);
    }
    
    
    return answer;
}