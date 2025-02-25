function solution(code) {
    var answer = '';
    var mode = 0;
    var changeMode = () => {
        if(mode === 0) mode = 1;
        else if(mode === 1)mode = 0;
    }

    

    
    for(let i = 0; i < code.length; i++) {
        
        if(code[i] === '1') {
            changeMode();
        }
        
        if(mode === 0 && code[i] !== '1') {
            if(i % 2 === 0) {
                answer += code[i];
            } else {
                continue;
            }
        } else if(mode === 1 && code[i] !== '1') {
            if(i % 2 !== 0) {
                answer += code[i];
            } else {
                continue;
            }
        }
    }
   if(answer === '') return 'EMPTY';
    
    return answer;
}