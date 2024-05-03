function solution(clothes) {
    var answer = 0;
    var map = new Map();
    var mul = 1;
    
    clothes.forEach((e) => {
        if(!map.has(e[1])) map.set(e[1], [e[0]]);
        else map.get(e[1]).push(e[0]);
    })
    
    for(let [k, v] of map) {
        mul *= (v.length + 1);
    }
    
    return mul - 1;
}