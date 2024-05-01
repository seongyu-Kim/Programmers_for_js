function solution(n, m, section) {
    var answer = 0;
    
    const arr = new Array(n).fill(1);
    
    section.forEach((v) => {
        arr[v - 1] = 0;
    })
    
    
    
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            for(let j = i; j < m + i && j < arr.length; j++) {
                arr[j] = 1;
            }
            answer++;
        }
        
        
        
    }
    return answer;
}