function solution(numbers, direction) {
    var answer = [...numbers];
    let firstVal = numbers[0];
    let endVal = numbers[numbers.length - 1];
    
    if(direction == "right") {
        answer.pop();
        answer.unshift(endVal);
        // answer.splice(0, 0, endVal);
    } else {
        // answer.splice(0, 1);
        answer.shift()
        answer.push(firstVal);
    }
    
    return answer;
}