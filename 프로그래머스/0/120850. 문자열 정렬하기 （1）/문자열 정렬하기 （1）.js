function solution(my_string) {
    var answer = [];
    var arr = [];
    
    for(let el1 of my_string) {
        arr.push(parseInt(el1));
    }
    for(let el2 of arr) {
        if(Number.isInteger(el2) == true) answer.push(el2);
    }
    
    
    return answer.sort();
}