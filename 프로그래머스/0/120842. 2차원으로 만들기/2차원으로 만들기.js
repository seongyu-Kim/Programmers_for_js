function solution(num_list, n) {
    const arr = new Array(num_list.length / n).fill(0).map(() => new Array(n));
    
    let cnt = 0;
    
    for(let i = 0; i < num_list.length / n; i++) {
        for(let j = 0; j < n; j++){
                arr[i][j] = num_list[cnt];
                cnt++;
        }
    }
    
    console.log(arr);
    
    return arr;
}