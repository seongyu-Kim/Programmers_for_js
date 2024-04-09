function solution(my_str, n) {
    
    var answer = new Array(Math.ceil(my_str.length/n)).fill("0");
    my_str = my_str.split("");
    
    for(let i = 0; i < answer.length; i++){
        answer[i] = my_str.splice(0, n).join('');
    }
    
    return answer;
}