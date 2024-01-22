function solution(arr) {
    const pow = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    const minLength = pow.findIndex(el => el > arr.length);

    if(pow.includes(arr.length)) {
        return arr;
    } else {
        let res = [];
        
        for(let i = 0; i < pow[minLength]; i++) {
            res.push(arr[i]);
            if(arr.length <= i) {
                res.fill(0, i)
            }
        }
        return res;
    }
}