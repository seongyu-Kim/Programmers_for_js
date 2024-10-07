function solution(a, b) {
    console.log(a, b, Number(a.toString()+b.toString()))
    
    if(Number(a.toString()+b.toString()) > (2 * a * b)) {
        return Number(a.toString()+b.toString());
    } else if(Number(a.toString()+b.toString()) == (2 * a * b)) {
        return Number(a.toString()+b.toString());
    } else {
        return (2 * a * b);
    }
}