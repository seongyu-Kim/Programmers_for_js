function solution(num_list) {
    var cnt1 = 0;
    var cnt2 = 0;
    
    for(let el of num_list) {
        if(el % 2 == 0) cnt2 += 1;
        else cnt1 += 1;
    }
    
    return [cnt2, cnt1];
    
}