function solution(n, k) {
    var answer = 0;
    
    answer = (n * 12000) + (k * 2000);
    
    var discount = 0;
    discount = 2000 * Math.floor(n / 10);
    
    return answer - discount;
}