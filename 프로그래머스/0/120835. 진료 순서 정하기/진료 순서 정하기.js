function solution(emergency) {
    var answer = new Array(emergency.length);
    var sortedArr = [...emergency].sort((a, b) => b - a);
    
    for(let i = 0; i < emergency.length; i++){
        let idx = emergency.indexOf(sortedArr[i]);
        answer.splice(idx, 1, i+1);
        
    }
    
    
    return answer;
}