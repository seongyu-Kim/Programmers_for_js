function solution(n) {
    var answer = 0;
    var num = [];
    var xNum = [];
    

    for(let i = 1; i <= 100; i++) {
        num.push(i);
    }
    
    
    for(let j = 1; j <= 200; j++) {
        if(j % 3 != 0 && j.toString().split("").includes("3") == false) {
            xNum.push(j);
        }
    }
    
    var idx = num.indexOf(n);

    
    answer = xNum[idx];
    
    return answer;
}