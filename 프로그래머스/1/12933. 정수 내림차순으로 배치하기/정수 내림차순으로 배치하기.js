function solution(n) {
    var answer = 0;
    var arr = [];
    
    n = n.toString().split("");
    
    for(let el of n) {
        arr.push(el);
    }
    
    arr.sort((a, b) => b - a);
    
    for(let el2 of arr) {
        answer += el2;
    }
    
    return parseInt(answer);
}