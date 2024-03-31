function solution(n)
{
    var answer = 0;
    
    var words = n.toString();
    var arr = words.split("");
    
    for(let i = 0; i < arr.length; i++){
        answer += Number(arr[i]);
    }

    return answer;
}