function solution(num) {
    var answer = 0;
    
    if(num == 1) return 0;
    else if(num != 1) {
        while(num != 1) {
            if(num % 2 == 0) {
                num = num / 2;
                answer += 1;
            } else if(num % 2 != 0){
                num = num * 3 + 1;
                answer += 1;
            }
            if(answer >= 500) {
                return -1;
            }
        }
    }
    
    
    
    
    return answer;
}