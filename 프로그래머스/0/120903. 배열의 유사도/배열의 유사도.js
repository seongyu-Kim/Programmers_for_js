function solution(s1, s2) {
    var answer = 0;
    
    for(let el1 of s1) {
        for (let el2 of s2){
            if(el1 === el2) answer += 1;
        }
    }
    return answer;
}