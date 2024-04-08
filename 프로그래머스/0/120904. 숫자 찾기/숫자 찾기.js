function solution(num, k) {
    var answer = 0;
    var arr = [];
    
    num = num.toString().split("");
    
    for(let el of num) {
        arr.push(parseInt(el));
    }
    
    if(arr.includes(k)) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == k) {
                answer += i + 1;
                break;
            }
           
        }
        
    } else return -1;
    
    
    console.log(arr);
    
    return answer;
}