function solution(i, j, k) {
    var answer = 0;
    var string = '';
    
    for(let a = i; a <= j; a++) {
        string += a;
    }
    
    for(let el of string.split("")) {
        if(el == k) answer += 1;
    }
    
    return answer;
}