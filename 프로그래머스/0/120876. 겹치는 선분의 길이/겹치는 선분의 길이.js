function solution(lines) {
    var answer = 0;
    lines.sort((a, b) => a[1] - b[1]);
    console.log(lines);
    
    const [ [str1, end1], [str2, end2], [str3, end3] ] = lines;
    
    const val1 = Math.min(end1, end2) - Math.max(str1, str2); //3 - 4 = -1
    const val2 = Math.min(end2, end3) - Math.max(str2, str3); //7 - 4 = 3
    const val3 = Math.min(end1, end3) - Math.max(str1, str3); //3 - 2 = 1;
    
    const val4 = Math.min(end1, end2, end3) - Math.max(str1, str2, str3);
    

    

    val1 > 0 ? answer += val1 : 0;
    val2 > 0 ? answer += val2 : 0;
    val3 > 0 ? answer += val3 : 0;
    
    val4 > 0 ? answer -= (val4 * 2) : 0;

    

    
    return answer;
}


