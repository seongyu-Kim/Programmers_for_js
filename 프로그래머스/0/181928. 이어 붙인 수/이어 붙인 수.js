function solution(num_list) {
    let evenSum = '';
    let oddSum = '';
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            evenSum += num_list[i].toString();
        } else {
            oddSum += num_list[i].toString();
        }
    }
    return Number(evenSum) + Number(oddSum);
    
}