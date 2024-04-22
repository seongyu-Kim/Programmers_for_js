function solution(n, m) {
    var answer = [];
    const gcd = (n, m) => (m > 0 ? gcd(m, n%m): n);
    
    return [gcd(n,m), (n*m)/gcd(n,m)];
}