function solution(k, m, score) {
    var answer = 0;
    var re = Math.floor(score.length/m);
    score.sort((a, b) => b - a);
    
    for(let i = 1; i <= re; i++) {
        let min = score[i * m - 1];
        answer += min * m;
    }
    
    return answer;
}