function solution(spell, dic) {
    var answer = 0;
    var sortedSpell = spell.sort().join("");
    // console.log(sortedSpell);
    
    for(let i = 0; i < dic.length; i++) {
        let sortedWord = dic[i].split("").sort().join("");
        console.log(sortedWord)
        
        if(sortedSpell === sortedWord) {
            return 1;
        }
    }
    
    return 2;
}