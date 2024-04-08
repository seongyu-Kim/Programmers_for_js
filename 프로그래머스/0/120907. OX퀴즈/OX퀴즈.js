function solution(quiz) {
    var answer = [];
    
    for(let el of quiz) {
        el = el.split(" ");
        el[0] = parseInt(el[0]);
        el[2] = parseInt(el[2]);
        el[4] = parseInt(el[4]);
        
        if(el[1] == "-") {
            el[2] = -1 * el[2]; 
        }
        
        if(el[0] + el[2] == el[4]) {
            answer.push("O");
        } else{
            answer.push("X");
        }
    }
    
    return answer;
}