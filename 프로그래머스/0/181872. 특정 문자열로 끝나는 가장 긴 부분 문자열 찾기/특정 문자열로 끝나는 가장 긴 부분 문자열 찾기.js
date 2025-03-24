function solution(myString, pat) {
    var answer = '';
    answer += myString.slice(0, myString.lastIndexOf(pat) + pat.length);
    return answer;
}