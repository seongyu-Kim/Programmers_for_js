function solution(food) {
    var answer = '';
    var tmp = '';
    
        for(let i = 1; i < food.length; i++) {
            if(food[i] % 2 == 0) {
                for(let k = 0; k < food[i]/2; k++) {
                    tmp += i;
                }
            } else {
                for(let j = 0; j < (food[i] - 1)/2; j++){
                    tmp += i;
                }
            }
        }
    tmp += 0;
    answer += tmp;
    
    for(let a = tmp.length - 2; a >= 0; a--) {
        answer += tmp[a];
    }
    
    return answer;
}