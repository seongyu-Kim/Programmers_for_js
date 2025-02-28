function solution(arr) {
    let X = [];
    
    arr.forEach(a => {
        X.push(...Array(a).fill(a));
    });
    
    return X;
}
