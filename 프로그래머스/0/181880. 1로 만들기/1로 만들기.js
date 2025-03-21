function solution(num_list) {
    var answer = new Array(num_list.length).fill(0);
    
    
    while(1) {
        for(let i = 0; i < num_list.length; i++) {
            if(num_list[i] === 1) {
                continue;
            } else if(num_list[i] % 2 === 0) {
                num_list[i] /= 2;
                answer[i]++;
                
            } else if(num_list[i] % 2 !== 0) {
                num_list[i] = (num_list[i] - 1)/2;
                answer[i]++;
            }
        }
        if(num_list.every((e) => e === 1)) {
            break;
        }
        
    }
    
    return answer.reduce((acc, cur) => acc + cur);
}