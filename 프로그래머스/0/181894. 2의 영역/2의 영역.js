function solution(arr) {
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);

    if (first === -1) return [-1];

    return arr.slice(first, last + 1);
}