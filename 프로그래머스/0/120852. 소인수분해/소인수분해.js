function solution(n) {
    var set = new Set();
    
    for(let i = 2; i <= n; i++) {
        
        while(n % i == 0) {
            n = n / i;
            set.add(i);
        }
    }
    
    return [...set];
}