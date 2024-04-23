function solution(sizes) {
    var answer = 0;
    var max = Math.max(...sizes.flat());
    var minArr = [];
    
    for(let el of sizes){
        minArr.push(Math.min(...el));
    }
    
    var max2 = Math.max(...minArr);
    
    return max * max2;
}