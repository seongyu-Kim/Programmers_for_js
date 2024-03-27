function solution(array, height) {
    var cnt = 0;
    
    for (let el of array){
        if(el > height) cnt += 1;
    }
    return cnt;
}
    