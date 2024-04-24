function solution(n, arr1, arr2) {
    var answer = [];
    var map = [];
    
    for(let i = 0; i < n; i++){
        
        map.push((parseInt(arr1[i].toString(2)) + parseInt(arr2[i].toString(2))).toString());
        
        if(map[i].length != n) {
            map[i] = map[i].split("");
            let sub = n - map[i].length;
            for(let j = 0; j < sub; j++) {
                map[i].unshift("0");
            }
            map[i].join("");
        }
    }
    
    for(let el1 of map) {
        let tmp = '';
        for(let el2 of el1) {
            if(el2 === "0") {
                tmp += " ";
            } else {
                tmp += "#";
            }
        }
        answer.push(tmp);
    }
    
    
    return answer;
}