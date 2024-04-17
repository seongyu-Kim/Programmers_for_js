function solution(id_pw, db) {
    var answer = 'fail';
    var id = id_pw[0];
    var pw = id_pw[1];
    
    for(let el of db) {
        let dbId = el[0];
        let dbPw = el[1];
        
        if(id === dbId) {
            if(pw === dbPw) return "login";
            else return "wrong pw";
        }
    }
    
    
    return answer;
}