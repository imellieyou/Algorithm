function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < queries.length; j++) {
            const [s, e, k] = queries[j];
            
            if(s <= i && i <= e && i % k === 0) {
                arr[i] += 1;
            }   
        }
    }
    return arr;
}