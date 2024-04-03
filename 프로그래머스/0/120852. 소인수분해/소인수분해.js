function solution(n) {
    var answer = [];
    let set = new Set();
    let div = 2;
    
    for(let i = 0; i <= n + 3; i++){
        if(n % div == 0) {
            set.add(div);
            n = n / div;
        } else if(n % div != 0) {
            div++;
        }
    }
    
    
    return [...set];
}