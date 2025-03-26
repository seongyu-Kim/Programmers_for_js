function solution(my_string) {
    
    my_string = my_string.trim().split(' ');
    
    return my_string.filter(el => !el == '');
    
}