function solution(sides) {
    var answer = 0;
    var max = Math.max(...sides);
    var min = Math.min(...sides);
    
    
    for(let x = max - min + 1; x <= max; x++) {
        console.log(x);
        answer++;
    }
    
    
    for(let x = max + 1; x < min + max; x++) {
        console.log(x);
        answer++;
    }
    
    
    
    return answer;
}