function solution(my_string) {
    return my_string.replace(/\s{2,}/g, ' ').trim().split(' ');
}