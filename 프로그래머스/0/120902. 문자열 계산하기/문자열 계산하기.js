function solution(my_string) {
    var answer = 0;
    var arr = [];
    
    my_string = my_string.split(" ");
    
    for(let el of my_string){
        if(!isNaN(parseInt(el))) { 
            arr.push(parseInt(el));
        } else { 
            arr.push(el);
        }
    }
    
    answer = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] === '+') {
            answer += arr[i + 1];
        } else if (arr[i] === '-') {
            answer -= arr[i + 1];
        }
    }
    
    return answer;
}
