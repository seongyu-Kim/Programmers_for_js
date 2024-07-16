function solution(num_str) {
    let arr = num_str.split("");
    
    return arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
}