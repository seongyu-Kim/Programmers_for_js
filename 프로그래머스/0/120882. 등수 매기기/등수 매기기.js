function solution(score) {
    var answer = [];
    var arr = [];
    
    for(let el of score) {
        el.reduce((acc, curr) => {
            arr.push((acc + curr)/2);
        })
    }
    
    var sortedArr = [...arr].sort((a, b) => b - a);
    
    for(let i = 0; i < arr.length; i++) {
        answer[i] = sortedArr.indexOf(arr[i]) + 1;
    }
    
    return answer;
}