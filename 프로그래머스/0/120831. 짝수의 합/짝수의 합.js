// function solution(n) {
//     var answer = 0;
//     return answer;
// }

function solution(n) {
    
    var sum = 0;
    
    for (let i = 0; i <= n; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
   
}