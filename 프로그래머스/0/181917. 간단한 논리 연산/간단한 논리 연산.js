function solution(x1, x2, x3, x4) {
    var answer = true;
    
    let y1, y2 = true;
    
    if(x1 || x2) y1 = true;
    else y1 = false;
    
    if(x3 || x4) y2 = true;
    else y2 = false;
    
    if(y1 && y2) return true;
    else return false;

}