function solution(my_string, queries) {
    return queries.reduce((acc, cur) => {
        const [s, e] = cur;
        const target = acc.slice(s, e + 1);

        acc = acc.slice(0, s) + target.split('').reverse().join('') + acc.slice(e + 1);

        return acc;
    }, my_string);
}