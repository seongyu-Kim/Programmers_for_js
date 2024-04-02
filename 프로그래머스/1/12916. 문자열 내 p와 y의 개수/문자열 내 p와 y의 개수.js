function solution(s){
    var answer = true;
    pCnt = 0;
    yCnt = 0;
    

    for(let el of s.toLowerCase()){
        if(el === "p") pCnt += 1;
        else if(el === "y") yCnt += 1;
    } 
    
    if(pCnt != yCnt) return false;

    return answer;
}