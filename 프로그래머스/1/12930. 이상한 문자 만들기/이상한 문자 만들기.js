function solution(s) {
    var answer = '';
    
    for(let i = 0; i < s.split(" ").length; i++) {
        for(let j = 0; j < s.split(" ")[i].length; j++) {
            
            if(j % 2 == 0) {
                answer += s.split(" ")[i][j].toUpperCase();
            } else {
                answer += s.split(" ")[i][j].toLowerCase();
            }
        }
        answer += " ";
    }
    
    return answer.slice(0, answer.length - 1);
   
}