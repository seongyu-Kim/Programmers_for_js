function solution(n) {
    var answer = 0;
    
    // if(n % 6 == 0) answer = n / 6;
    // else if(n % 6 != 0) {
    //     for(let i = 2; i < 100; i++) {
    //         if((n * i) % 6 != 0) {
    //             continue;
    //         } else if ((n * i) % 6 === 0) {
    //             answer = (n * i) / 6;
    //             break;
    //         }
    //     }
    // }
    
    var i = 1;
    while(true) {
        if((n * i) % 6 == 0){
            answer = (n * i) / 6;
            break;
        }
        i++;
    }
    return answer;
}