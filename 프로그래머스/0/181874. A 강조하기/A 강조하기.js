function solution(myString) {
    let answer = '';

    for (let e of myString) {
        answer += e === ' ' ? e : e === 'A' ? e : e === 'a' ? e.toUpperCase() : e.toLowerCase();
    }

    return answer;
}
