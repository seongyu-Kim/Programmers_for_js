function solution(nums) {
    var answer = 0;
    var tmp = [];
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                tmp.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    function isPrime(num) {
        if(num === 2) return true;
        
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    for(let i = 0; i < tmp.length; i++) {
        if(isPrime(tmp[i])) {
            answer++;
        }
    }
 
    return answer;
}