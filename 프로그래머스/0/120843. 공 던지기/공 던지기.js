function solution(numbers, k) {
    var answer = 0;
    var arr = [];
    
    for(let i = 0; i < k; i++) {
        for(let el of numbers)
            arr.push(el);
    }
    
    answer += arr[(k - 1 )* 2]
    
    return answer;
}