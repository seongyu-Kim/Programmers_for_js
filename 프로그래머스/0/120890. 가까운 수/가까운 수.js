function solution(array, n) {
    arr = [...array].sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b );
    
    return arr[0];
}