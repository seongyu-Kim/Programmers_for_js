function solution(my_string, m, c) {
    var answer = '';
    
    for(let i = c; i <= my_string.length; i += m) {
        answer += my_string[i - 1];
    }
    
    return answer;
}