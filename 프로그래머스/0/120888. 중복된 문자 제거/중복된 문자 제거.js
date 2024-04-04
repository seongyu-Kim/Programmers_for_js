function solution(my_string) {
    var answer = '';
    var set = new Set([...my_string]);
    
    for(let el of set) {
        answer += el;
    }
    
    return answer;
}