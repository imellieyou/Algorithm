function solution(arr) {
    const first = arr.indexOf(2);
    const last = arr.lastIndexOf(2);
    
    return arr.slice(first, last + 1).length ? arr.slice(first, last + 1) : [-1];
}