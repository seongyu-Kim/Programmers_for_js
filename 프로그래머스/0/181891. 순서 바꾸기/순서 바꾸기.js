function solution(num_list, n) {
    let after_n = num_list.slice(n);
    let before_n = num_list.slice(0, n);
    let result = after_n.concat(before_n);
    return result;
}