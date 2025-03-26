function solution(myString, pat) {
    var answer = 0;
    
    for(let i = 0; i < myString.length; i++) {
        
        let temp = myString.slice(i, i+pat.length);
        if(temp.includes(pat)) answer++;
    }
    
    return answer;
}