function solution(my_string, is_suffix) {
    var arr = [];
    
    for(let i = 0; i < my_string.length; i++) {
        
        let temp = my_string.split('').reverse();
        temp = temp.slice(0, i + 1).reverse().join('');
        arr.push(temp);
        
    }
    if(arr.includes(is_suffix)) return 1;
    else return 0;
}