function solution(myString, pat) {
    
    let newString = [...myString].map(el => el === "A" ? "B" : "A").join('');
    
    return newString.includes(pat) ?  1 : 0;
}