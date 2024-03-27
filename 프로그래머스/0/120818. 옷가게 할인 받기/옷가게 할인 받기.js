function solution(price) {
    var discount = 0;
    
    if (price >= 500000) {
        discount = price * (20/100);
    } else if (price >= 300000) {
        discount = price * (10/100);
    } else if (price >= 100000) {
        discount = price * (5/100);
    } else if (price < 100000){
        discount = 0;
    }
    
    return Math.floor(price - discount);
}
