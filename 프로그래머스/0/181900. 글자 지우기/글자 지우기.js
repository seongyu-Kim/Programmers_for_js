function solution(my_string, indices) {
    var answer = my_string.split('');
    
    indices.sort((a, b) => b - a);
    
    for(let i of indices) {
        answer.splice(i, 1);
    }
    return answer.join('');
}