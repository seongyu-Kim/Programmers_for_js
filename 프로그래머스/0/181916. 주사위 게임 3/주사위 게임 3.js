function solution(a, b, c, d) {
    // a = 1; 
    // b = 2; 
    // c = 2; 
    // d = 3;
    let arr = [a, b, c, d].sort();
    let set = new Set([a, b, c, d]);

    //모든 수가 같은 경우
    if(set.size === 1) return a * 1111;
    
    //모든 수가 다른 경우
    if(set.size === 4) {
        let arr = [...set].sort();
        return arr[0];
    }
    
    //세 수가 같고 한 수가 다른 경우
    if(arr[0] !== arr[1] && arr[1] === arr[2] && arr[2] === arr[3]) {
        return Math.pow(10 * arr[1] + arr[0], 2); 
    } else if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== arr[3]) {
        return Math.pow(10 * arr[1] + arr[3], 2);
    }
    
    //각각 두 개씩 같을 경우
    if(arr[0] === arr[1] && arr[2] === arr[3]) {
        return (arr[1] + arr[2]) * Math.abs(arr[1] - arr[2]);
    }
    
    //두 수가 같고 나머지 두 수가 다를 경우
    if(a === b && c !== d) {
        return c * d;
    } else if(a === c && b !== d) {
        return b * d;
    } else if(a === d && b !== c) {
        return b * c;
    } else if(b === c && a !== d) {
        return a * d;
    } else if(b === d && a !== c) {
        return a * c;
    } else if (c === d && a !== b) {
        return a * b;
    }
    //1, 11, 16, 24, 36, 39
    //입력값 〉 1, 2, 2, 3
    //기댓값 〉 3
}