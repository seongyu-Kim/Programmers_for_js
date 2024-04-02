function solution(x) {
    
    var sum = 0;
    x = x.toString();
    
    for(let el of x) {
        sum += parseInt(el);
    }
    if(x % sum == 0) return true;
    else return false;
}