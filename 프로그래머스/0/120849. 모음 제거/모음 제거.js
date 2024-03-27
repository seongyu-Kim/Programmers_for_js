function solution(my_string) {
    var answer = '';
    var arr = [];
    var idx = 0;
    
    arr = my_string.split("");
    
    for(let i = 0; i < my_string.length; i++) {
        if(arr.includes("a")){
            idx = arr.indexOf("a");
            arr.splice(idx, 1);
        } else if(arr.includes("e")) {
            idx = arr.indexOf("e");
            arr.splice(idx, 1);
        } else if(arr.includes("i")){
             idx = arr.indexOf("i");
            arr.splice(idx, 1);
        } else if(arr.includes("o")){
             idx = arr.indexOf("o");
            arr.splice(idx, 1);
        } else if(arr.includes("u")){
             idx = arr.indexOf("u");
            arr.splice(idx, 1);
        }
        
    }
    
    return arr.join('');
    
    
}