function solution(my_string) {
    var answer = 0;
    const regex = /\d+/g;
    
    
    
    answer = my_string.match(regex) ? my_string.match(regex).reduce((acc, cur) => acc + parseInt(cur), 0) : 0;
    
    return answer;
}