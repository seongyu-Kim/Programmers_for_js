function solution(num_list, n) {
    var answer = [];
    answer.push(num_list[0]);
    for(let i = 1; i <= num_list.length; i++) {
        if(!num_list[i * n]) break;
        answer.push(num_list[i * n]);
    }
    
    return answer;
}