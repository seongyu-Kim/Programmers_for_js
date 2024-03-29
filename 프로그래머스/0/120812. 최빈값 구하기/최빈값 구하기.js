function solution(array) {
    var answer = 0;
    
    const cnt = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
    
    //????
    let maxCnt = Math.max(...Object.values(cnt));
    
    //최빈값의 키를 리턴, [ '3', '1', '2', '4' ]
    let sortedKey = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a]);
    console.log(sortedKey);
    
    if (cnt[sortedKey[0]] === cnt[sortedKey[1]]) return -1;
    else return Number(sortedKey[0]);

}