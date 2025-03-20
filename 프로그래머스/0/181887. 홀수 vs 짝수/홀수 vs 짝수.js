function solution(num_list) {
    var answer = 0;
    let temp1 = 0;
    let temp2 = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if((i+1) % 2 === 0) {
            temp1 += num_list[i];
        } else {
            temp2 += num_list[i];
        }
    }
    
    return temp1 === temp2 ? temp1 : temp1 > temp2 ? temp1 : temp2;
}