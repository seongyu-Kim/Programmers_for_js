function solution(before, after) {
    var answer = 0;
    
    var arr1 = [];
    var arr2 = [];
    
    arr1 = [...before].sort().join("");
    arr2 = [...after].sort().join("");
    
    if(arr1 == arr2) return 1;
    
    return answer;
}