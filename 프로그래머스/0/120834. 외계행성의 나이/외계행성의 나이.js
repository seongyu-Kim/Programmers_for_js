function solution(age) {
    var answer = '';
    var arr = [];
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    
    arr = age.toString().split(""); 

    for(let i = 0; i < arr.length; i++){
        answer += alphabet[arr[i]];
    }
    
    return answer;
}