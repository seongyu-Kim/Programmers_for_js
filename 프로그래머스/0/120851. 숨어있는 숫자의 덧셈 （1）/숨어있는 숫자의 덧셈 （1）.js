function solution(my_string) {
    var answer = 0;
    var arr = [];
    var newArr = [];
    
    
    arr = my_string.split("");
    
    for(let i = 0; i < arr.length; i++) {
        
        newArr.push(parseInt(arr[i]));
        
        if(Number.isInteger(newArr[i]) == true) {
            answer += newArr[i];
        }
        
    }
    return answer;
}