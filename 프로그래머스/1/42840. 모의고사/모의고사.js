function solution(answers) {
    var answer = [];
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    var aCnt = 0;
    var bCnt = 0;
    var cCnt = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === a[i % a.length]) aCnt++;
        if(answers[i] === b[i % b.length]) bCnt++;
        if(answers[i] === c[i % c.length]) cCnt++;
    }
    
        
    const max = Math.max(aCnt, bCnt, cCnt);
    if(aCnt === max) answer.push(1);
    if(bCnt === max) answer.push(2);
    if(cCnt === max) answer.push(3);
    
    return answer;
}