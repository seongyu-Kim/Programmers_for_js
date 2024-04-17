function solution(id_pw, db) {
    var answer = 'fail';
    var id = id_pw[0];
    var pw = id_pw[1];
    
    db = db.flat();
    
    for(let i = 0; i < db.length; i++) {
        if(id === db[i]) {
            if(pw === db[i + 1]) {
                return "login";
            } else if (pw != db[i + 1]) {
                return "wrong pw";
            }
        } 
    }
    
    
    return answer;
}