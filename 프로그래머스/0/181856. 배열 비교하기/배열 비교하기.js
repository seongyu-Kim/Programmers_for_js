function solution(arr1, arr2) {
    
    if(arr1.length > arr2.length) {
        return 1;
        
    }else if(arr1.length < arr2.length) {
        return -1;
        
    } else {
        let arrSum1 = 0;
        arr1.forEach(num => {
            arrSum1 += num;
        })
        
        let arrSum2 = 0;
        arr2.forEach(num => {
            arrSum2 += num;
        })
        
        if(arrSum1 > arrSum2) return 1;
        else if(arrSum2 > arrSum1) return -1;
        else return 0;
    }
}