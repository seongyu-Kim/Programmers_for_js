function solution(my_string) {
    var answer = '';
    
    for(let el of my_string) {
        
        if(el === el.toLowerCase()) {
            answer += el.toUpperCase();
        } else {
            answer += el.toLowerCase();
        }
        
    }
    return answer;
}