function solution(priorities, location) {
    var answer = 0;
    var arr = priorities.map((v, i) => {
        return {
            index : i, value : v
        };
    });
    
    var que = [];
    
    while(arr.length) {
        var cur = arr.shift();
        var hasPri = arr.some((el) => el.value > cur.value);
        
        if(hasPri) arr.push(cur);
        else que.push(cur);
        
    }
    
    return que.findIndex(el => el.index === location) + 1;
}