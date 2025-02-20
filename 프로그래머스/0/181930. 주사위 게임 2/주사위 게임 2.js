function solution(a, b, c) {
    
    
    if( a === b && b === c) {
        return (a * 3) * (Math.pow(a, 2) * 3) * (Math.pow(a, 3) * 3);
    } else if ( (a === b && b !== c) || (a !== b && b === c) || ( a === c && a !== b) )  {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    } else return a + b + c;
    
}
//입력값 〉 3, 5, 3
//기댓값 〉 473