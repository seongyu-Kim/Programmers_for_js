function solution(k, dungeons) {
    var answer = -1;
    
    const permutation = arr => {
        let result = [];
        if (arr.length === 0) return [[]];
        
        arr.forEach((cur, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = permutation(rest);
            const attach = permutations.map((el) => [cur, ...el]);
            result.push(...attach);
            
        });
        return result;
    }
    
    for(let el of permutation(dungeons)){
        
        let cnt = 0;
        let currentK = k;
        for(let i = 0; i < el.length; i++) {
            if(el[i][0] <= currentK){
                currentK -= el[i][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
        
    }
    
    
    
    return answer;
}