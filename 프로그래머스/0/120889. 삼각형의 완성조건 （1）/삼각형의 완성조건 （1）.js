function solution(sides) {
   var newArr = [];
    
   newArr = sides.sort(function(a, b){
        return a - b;
    })
    
    if(newArr[2] < newArr[0] + newArr[1]) return 1;
    else return 2;
}