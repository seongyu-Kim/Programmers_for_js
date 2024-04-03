function solution(arr) {
    var answer = [];
    
    var idx = arr.indexOf(Math.min(...arr));
    console.log(idx);
    
    arr.splice(idx, 1)
    
    if(arr.length == 0) {
        arr.push(-1);
    }
    
    return arr;
}