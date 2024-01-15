function solution(my_string) {
    return [...my_string].map((el, idx) => my_string.slice(-idx - 1)).sort();
}