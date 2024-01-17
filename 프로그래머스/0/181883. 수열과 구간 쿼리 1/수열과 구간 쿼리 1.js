function solution(arr, queries) {
    var answer = [];
    
    for(let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];
        
        for(let k = 0; k < arr.length; k++) {
            if(k >= a && k <= b) arr[k] += 1;
        }
    }
    
    return arr;
}