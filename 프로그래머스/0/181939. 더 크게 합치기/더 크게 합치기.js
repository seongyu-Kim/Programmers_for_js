function solution(a, b) {
    let x = Number(a.toString() + b.toString());
    let y = Number(b.toString() + a.toString());
    
    if(x > y) {
        return x;
    } else if (x === y) {
        return x;
    } else {
        return y;
    }
    
}