function solution(l, r) {
    let answer = [];

    for (let i = 1; ; i++) {
        let num = parseInt(i.toString(2)) * 5;
        
        if (num > r) break; 
        if (num >= l) answer.push(num); 
    }
    
    return answer.length ? answer : [-1];
}
