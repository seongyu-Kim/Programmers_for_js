function solution(n) {
    var answer = 0;
    var arr = Array(n + 1).fill(true).fill(false, 0, 2);
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(arr[i]) {
            for(let j = i * i; j <= n;  j += i) {
                arr[j] = false;
            }
        }
    }

    answer = arr.reduce((acc, curr) => {
        return curr === true ? acc + 1: acc;
    })
        
    return answer;
}