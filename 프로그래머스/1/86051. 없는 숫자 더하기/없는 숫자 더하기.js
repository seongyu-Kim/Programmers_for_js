function solution(numbers) {
    var answer = 0;
    var sum = 0;
    
    for(let el of numbers) {
        answer += el;
    }
    
    for(let i = 0; i < 10; i++){
        sum += i;
    }
    
    return sum - answer;
}