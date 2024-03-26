function solution(my_string, letter) {
    var answer = '';
    
    for(let el of my_string) {
        var index = my_string.indexOf(letter);
        if(el !== letter) answer += el;
    }
    
    
    return answer;
}