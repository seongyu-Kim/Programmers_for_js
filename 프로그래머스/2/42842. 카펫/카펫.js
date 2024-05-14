function solution(brown, yellow) {
    var answer = [];
    var s = brown + yellow; //12
    
    for(let width = 3; width <= s/3; width++) {
 
        if(s % width !== 0) continue;
        
        const height = s/width;
        console.log(height);
        const yCnt = (width - 2) * (height - 2);
        const bCnt = s - yCnt;
        if(brown === bCnt && yellow === yCnt) {
            
            answer = [width, height];
        }
    }
    
    
    return answer;
}