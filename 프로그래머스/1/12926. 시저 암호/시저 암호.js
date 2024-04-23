function solution(s, n) {
    var answer = '';
    
    s.split("").map((el) => {
        el = el.charCodeAt();
        
        if(el == 32) {
            answer += " ";
        }
        
        if(97 <= el && el <= 122) {
            answer += String.fromCharCode((el + n - 97) % 26 + 97);
        }
        
        if(65 <= el && el <= 90) {
            answer += String.fromCharCode((el + n - 65) % 26 + 65);
        }
    })
    
    return answer;
}