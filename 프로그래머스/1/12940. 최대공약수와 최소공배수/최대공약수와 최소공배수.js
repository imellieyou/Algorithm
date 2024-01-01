function solution(n, m) {
    let gcd;
    
    for(let i = 1; i <= Math.min(n,m); i++) {
        // 최대 공약수 찾기 : n, m 중 작은 값이 나눠져야 하는 값이므로 범위는 작은 값까지
        if (Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0)
            gcd = i;
    };
    
    return [gcd , n * m / gcd];
}