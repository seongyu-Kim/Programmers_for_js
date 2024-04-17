function solution(babbling) {
    var answer = 0;
    var words = [ "aya", "ye", "woo", "ma" ];
    
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(babbling[i] === words[j]) {
                answer += 1;
                babbling.splice(i, 1);
            }
        }
    }
    
    
    for(let el of babbling) {
        
            let curr = el;
            let match = true;
        
        while(curr.length > 0 && match) {
            
            match = false;
            
            for(let word of words) {
                
                if(curr.startsWith(word)) {
                    curr = curr.slice(word.length);
                    match = true;
                    break;
                } 
            }
        }
        
        if(curr.length === 0) answer += 1;
    }
    
   
    
    return answer;
}