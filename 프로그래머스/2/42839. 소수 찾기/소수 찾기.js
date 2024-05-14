function solution(numbers) {
    var answer = new Set();
    var array = numbers.split('');
    
    //
    const permutation = (arr, setNum) => {
        let result = [];
        if(setNum === 1) return arr.map((v) => v);
        
        arr.forEach((cur, idx, origin) => {
            //
            const rest = arr.filter((el, index) => idx !== index);
            //
            const permutations = permutation(rest, setNum - 1);
            //
            const attach = permutations.map((el) => cur + el);
            
            result.push(...attach);
            
        })
        return result;
    }
    
    //
    const prime = (num) => {
        if(num <= 1) return false;
        
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    for(let i = 1; i <= numbers.length; i++) {
        permutation(array, i).forEach((el) => {
            prime(el) ? answer.add(parseInt(el)) : 0;
        })
    }
    
    return [...answer].length;
}