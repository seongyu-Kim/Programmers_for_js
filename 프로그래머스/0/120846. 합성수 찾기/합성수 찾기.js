function solution(n) {
    var answer = 0;
    
    for(let i = 4; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j == 0) {
                answer += 1;
                break;
            }
        }
    }
    //1. 4/2, 6/2, 6/3, 8/2, 8/4, 9/3, 10/2, 10/5, 12/2,3,4, 14/2, 15/3.5
    // 여기서 중복 지워야댐ㅋㅋ
    
    
    
    return answer;
}