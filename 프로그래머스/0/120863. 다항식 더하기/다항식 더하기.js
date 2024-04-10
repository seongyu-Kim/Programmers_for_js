function solution(polynomial) {
    var answer = '';
    var arr = [];
    var el1 = 0;
    var el2 = 0;
    
    polynomial = polynomial.split(" ");
    
    for(let i = 0; i < polynomial.length; i += 2) {
        arr.push(polynomial[i]);
    }
    
    
    for(let j = 0; j < arr.length; j++) {
        
        if(arr[j].includes("x")) {
            
            if(arr[j].length == 1) {
                el1 += 1;
            } else {
                el1 += parseInt(arr[j].split("x"));
            }
            
        } else {
           el2 += parseInt(arr[j]);
        }
    }
    
    if (el1 === 0) {
        if (el2 === 0) {
            answer = "0";
        } else {
            answer = el2.toString();
        }
    } else {
        if (el1 === 1) {
            answer += "x";
        } else {
            answer += el1 + "x";
        }
        if (el2 !== 0) {
            answer += " + " + el2;
        }
    }

    
 
    return answer;
}

