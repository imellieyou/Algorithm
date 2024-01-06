function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numbers.forEach((el, idx) => s = s.replaceAll(el, idx));
    
    return s / 1; 
}