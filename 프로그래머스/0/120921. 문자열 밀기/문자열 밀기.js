function solution(A, B) {
    var answer = -1;
    var rotate = [...A];
    var cnt = 0;

    
    if(A === B) {
        return 0;
    } else {
        for(let i = A.length - 1; i >= 0; i--) {
            
            rotate.pop();
            rotate.unshift(A[i]);
            cnt++;
            
            if(rotate.join("") == B) {
                answer = cnt;
                break;
                
            }
            
        }
    }
    
    return answer;
}