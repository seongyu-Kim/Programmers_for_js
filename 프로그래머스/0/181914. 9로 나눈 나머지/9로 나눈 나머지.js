function solution(number) {
    var answer = [];
    
    answer = number.split('');
    let sum = answer.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    
    return sum % 9;
}