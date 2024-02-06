let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const cnt = parseInt(input[0].split(' ')[0]);
    
    for(let i = 1; i <= cnt; i++) {
        const A = input[i].split(' ')[0];
        const B = input[i].split(' ')[1];
        
        console.log(parseInt(A) + parseInt(B));
    }