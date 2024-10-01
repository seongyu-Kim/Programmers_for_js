function solution(num_list) {
    
    let mul = num_list.reduce((acc, idx) => acc * idx);
    
    let sum = num_list.reduce((acc, idx) => acc + idx);
    let pow = Math.pow(sum, 2);
    
    if (mul < pow) return 1;
    else return 0;
}