function solution(dots) {
    var answer = 0;
    
    
    dots = dots.sort((a, b) => a[0] - b[0]);
    dots = dots.sort((a, b) => a[1] - b[1]);
    console.log(dots);
    answer = (dots[3][0] - dots[0][0]) * (dots[3][1] - dots[0][1]);
    
    return answer;
}