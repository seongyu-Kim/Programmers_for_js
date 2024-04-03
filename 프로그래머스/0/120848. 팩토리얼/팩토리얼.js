function solution(n) {
    
    var factorial = x => {
        for(let i = x - 1; i > 0; i--){
            x = x * i;
        }
        return x;
    }
    console.log(factorial(1));
    
    for(let j = 1; j <= n; j++){
        if(factorial(j) > n) return j - 1;
        else if(factorial(j) == n) return j;
    }
    
}