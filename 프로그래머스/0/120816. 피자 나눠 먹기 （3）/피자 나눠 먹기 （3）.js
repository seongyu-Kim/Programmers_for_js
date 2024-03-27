function solution(slice, n) {
    var answer = 0;
    
    if(slice <= n){
        if(n % slice == 0) answer += n/slice;
        else if (n % slice != 0) answer += Math.ceil(n/slice);
    } else if(slice > n) {
        answer += 1;
    }
    
    return answer;
}