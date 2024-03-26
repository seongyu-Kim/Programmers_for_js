function solution(dot) {
    var el1 = dot[0];
    var el2 = dot[1];
    
    if(el1 > 0 && el2 > 0) return 1;
    else if(el1 < 0 && el2 > 0) return 2;
    else if (el1 < 0 && el2 < 0) return 3;
    else return 4;
    
    
}