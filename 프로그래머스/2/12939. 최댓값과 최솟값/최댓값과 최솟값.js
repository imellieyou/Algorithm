function solution(s) {
    // Math.min(...s.split(' ')), Math.max(...s.split(' '));
    const arr = s.split(' ').sort((a, b) => a - b);
    return arr.filter((el, idx) => idx === 0 || idx === arr.length - 1).join(' ');
}