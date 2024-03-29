function solution(n) {
    var answer = 0;
    
    //1. n = result * 6
    //2. n = (result * 6) / slice
    
    //slice = (result * 6) / n
    
    // n = (result * 6) / ((result * 6) / n)
    // n * ((result * 6) / n) = (result * 6)
    // (n * ((result * 6) / n)) / 6 = result 
    
    // answer = (n * ((answer * 6) / n)) / 6
    
    if(n % 6 == 0) answer = n / 6;
    
    else if(n % 6 != 0) {
        for(let i = 2; i < 100; i++) {
            if((n * i) % 6 != 0) {
                continue;
            } else if ((n * i) % 6 === 0) {
                answer = (n * i) / 6;
                break;
            }
        }
    }
    return answer;
}