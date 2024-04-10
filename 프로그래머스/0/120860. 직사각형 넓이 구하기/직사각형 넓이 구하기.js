function solution(dots) {
    var answer = 0;
    
    // x좌표와 y좌표를 각각 따로 배열에 저장
    var x = [];
    var y = [];
    for (var i = 0; i < dots.length; i++) {
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    
    // x좌표와 y좌표를 정렬
    x.sort((a, b) => a - b);
    y.sort((a, b) => a - b);
    
    // 사각형의 가로와 세로 길이 계산
    var width = x[3] - x[0];
    var height = y[3] - y[0];
    
    // 넓이 계산
    answer = width * height;
    
    return answer;
}
