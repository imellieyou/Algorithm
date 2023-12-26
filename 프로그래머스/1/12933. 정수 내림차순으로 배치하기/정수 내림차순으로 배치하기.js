function solution(n) {

    let answer = '';
   let num = n.toString().split('').sort((a, b) => b-a).map(el => Number(el))
   
   
   return Number(num.reduce((acc, cur) => acc + cur, ''))
}