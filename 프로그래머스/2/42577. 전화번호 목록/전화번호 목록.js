function solution(phone_book) {
    var answer = true;
    var map = new Map();
    
    phone_book.forEach((e) => {
        map.set(e, '');
    })
    console.log(map.entries());
    
    for(let key of map.keys()) {
        for(let i = 1; i < key.length; i++) {
            let tmp = key.slice(0, i);
            
            if(map.has(tmp)) return false;
        }
    }
    
    return answer;
}