//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(parseInt(A/B));
    console.log(A%B);
    
    process.exit();
});
