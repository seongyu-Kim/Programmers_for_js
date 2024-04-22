function solution(s) {
    var answer = true;
    
    if(s.length == 4 || s.length == 6) {
        for(let el of s.split("")) {
            if(isNaN(parseInt(el))) return false;
        }
    } else return false;
    

    
    return answer;
}