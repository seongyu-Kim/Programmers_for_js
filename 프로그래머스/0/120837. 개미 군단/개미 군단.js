function solution(hp) {
    var answer = 0;
    
    if(hp % 5 == 0) {
        answer += hp / 5;
    } else if (hp % 5 != 0 && (hp % 5) % 3 == 0) {
        answer += Math.floor(hp / 5);
        answer += (hp % 5) / 3;
    } else if (hp % 5 != 0 && (hp % 5) % 3 != 0) {
        answer += Math.floor(hp / 5);
        answer += Math.floor((hp % 5) / 3);
        answer += (hp % 5) % 3;
    }
    
    return answer;
}