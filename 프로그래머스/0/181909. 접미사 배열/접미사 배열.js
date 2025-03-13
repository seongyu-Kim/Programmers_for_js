function solution(my_string) {
    var answer = [];

    for(let i = 0; i < my_string.length; i++) {
        let temp = my_string.split('').reverse().slice(0, i + 1);
        temp = temp.reverse().join('');
        answer.push(temp);
    }
    
    return answer.sort();
}