function solution(common) {
    var answer = 0;
    
    if((common[1] - common[0]) === (common[2] - common[1])) {
        //등차수열
        answer = common[common.length - 1] + (common[1] - common[0]);
    } else if(common[1] / common[0] === common[2] / common[1]) {
        //등비수열
        answer = common[common.length - 1] * (common[1] / common[0]);
    }
    
    return answer;
}

