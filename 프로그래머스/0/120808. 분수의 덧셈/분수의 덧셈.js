function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var numer = 0;
    var denom = 0;
    
    numer = (numer1 * denom2) + (numer2 * denom1);
    denom = (denom1 * denom2);
    
    let getGCD = (a, b) => {return (a % b == 0) ? b : getGCD(b, a % b)};
    
    
    let gcd = getGCD(numer, denom);
    
    
    
    
    return [numer/gcd, denom/gcd];
}