function solution(dots) {
    // dots 배열: [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]

    // 모든 가능한 두 직선 쌍의 인덱스
    const pairs = [
        [[0, 1], [2, 3]], // 직선 AB와 CD
        [[0, 2], [1, 3]], // 직선 AC와 BD
        [[0, 3], [1, 2]], // 직선 AD와 BC
    ];

    // 각 쌍의 평행성 검사
    for (let pair of pairs) {
        const [[i, j], [k, l]] = pair;
        const [x1, y1] = dots[i];
        const [x2, y2] = dots[j];
        const [x3, y3] = dots[k];
        const [x4, y4] = dots[l];

        // 교차 곱을 이용한 평행성 검사
        // (y2 - y1) * (x4 - x3) == (y4 - y3) * (x2 - x1)
        if ((y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1)) {
            return 1;
        }
    }

    return 0;
}
