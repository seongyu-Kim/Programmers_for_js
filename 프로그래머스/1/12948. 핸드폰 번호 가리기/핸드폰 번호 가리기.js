function solution(s) {
//     var answer = '';
    
//     phone_number = phone_number.split("");
    
//     for(let i = 0; i < phone_number.length - 4; i++){
//         phone_number.splice(i, 1, "*");
//     }
    
//     console.log(phone_number);
//     for(let el of phone_number) {
//         answer += el;
//     }
    
//     return answer;
    return s.replace(/\d(?=\d{4})/g, "*");
}