function solution(numbers) {
    var answer = 0;
    var max1 = 0;
    var max2 = 0;
    var index = 0;
    
    max1 = Math.max(...numbers);
    index = numbers.indexOf(max1);
    numbers.splice(index, 1);
    max2 = Math.max(...numbers);    
    
    return max1 * max2;
}