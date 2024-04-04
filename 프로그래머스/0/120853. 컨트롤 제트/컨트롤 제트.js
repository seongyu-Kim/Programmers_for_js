function solution(s) {
    var answer = 0;
    var arr = s.split(" ");
    
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(parseInt(arr[i]))) {
            answer += parseInt(arr[i]);
        }else {
            answer -= parseInt(arr[i - 1]);
        }
    }
    return answer;
}