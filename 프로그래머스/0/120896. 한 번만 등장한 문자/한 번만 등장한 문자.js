function solution(s) {
    var answer = '';
    
    var cnt = s.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    answer += Object.keys(cnt).filter((key) => cnt[key] == 1);
    
    return answer.split(",").sort().join('');
}