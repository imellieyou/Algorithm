const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const A = parseInt(input[0]);
	for(let i = 1; i <= 9; i++) {
        console.log(`${A} * ${i} = ${A * i}`);
    }
    process.exit();
});
