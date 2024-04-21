function solution(left, right) {
    var answer = 0;
    //약수가 홀수인 경우 =>  제곱근을 약수로 가지는 경우
    
    for(let i = left; i <= right; i++) {
        if(Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
        
    }
    
    return answer;
}