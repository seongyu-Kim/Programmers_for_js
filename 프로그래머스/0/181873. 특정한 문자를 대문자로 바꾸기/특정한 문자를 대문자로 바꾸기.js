function solution(my_string, alp) {
    var answer = '';
    
    
    for(let e of my_string) {
        answer += e === alp ? e.toUpperCase() : e;
    }
    
    return answer;
}