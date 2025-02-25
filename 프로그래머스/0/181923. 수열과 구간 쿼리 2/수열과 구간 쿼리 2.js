function solution(arr, queries) {
    var answer = [];

        
    for(let i = 0; i < queries.length; i++) {
        let query = queries[i];
        let temp = [...arr].slice(query[0], query[1] + 1);
        temp.sort((a, b)=> a - b);

        for(let j = 0; j < temp.length; j++) {
            if(query[2] < temp[j]) {
                answer.push(temp[j]);
                break;
            } else if(temp[temp.length - 1] == temp[j] ) {
                answer.push(-1);
                break;
            } 
        }
    }

    return answer;

}
