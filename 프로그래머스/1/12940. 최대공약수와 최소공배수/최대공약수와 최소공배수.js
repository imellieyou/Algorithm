function solution(n, m) {
    let gcd;
    
    for(let i = 1; i <= Math.min(n,m); i++) {
        if (Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0)
            gcd = i;
    };
    
    return [gcd , n * m / gcd];
}