function solution(numbers) {
    var answer = '';
    
    numbers.sort((a, b) => {
        const num1 = a.toString() + b.toString();
        const num2 = b.toString() + a.toString();
        
        return num2 - num1;
    })
    
    answer += numbers.join('');
    
    if(answer[0] === '0') return '0';
    
    return answer;
}