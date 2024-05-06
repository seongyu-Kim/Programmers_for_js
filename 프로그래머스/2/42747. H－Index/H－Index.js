function solution(citations) {
    var answer = 0;
    var arr = [];
    
    
    
    for(let i = 0; i < citations.length; i++) {
        
        let cnt = 0;
        for(let j = 0; j < citations.length; j++) {
            
            if(citations[i] <= citations[j]) {
                cnt++;                
                
            }
        }
        console.log('i', citations[i], 'cnt', cnt);
        arr.push(Math.min(cnt, citations[i]));
    }
    
    answer = Math.max(...arr);
    
    return answer;
}