function solution(numbers) {
    var answer = 0;
    var arr = [];
    
    //오름차순 정렬
    numbers = numbers.sort((a, b) => a - b);
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++){
            if(i != j) {
            let el = numbers[i] * numbers[j];
            arr.push(el);
            } 
        }
    }
    
    answer = Math.max(...arr);
    
    return answer;
}