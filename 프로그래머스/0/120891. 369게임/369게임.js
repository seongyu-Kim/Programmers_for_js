function solution(order) {
    var answer = 0;
    
    order = order.toString();
    
    for(let el of order) {
        if(el % 3 == 0) answer += 1;
        if(el == 0) answer -= 1;
    }
    
    return answer;
}