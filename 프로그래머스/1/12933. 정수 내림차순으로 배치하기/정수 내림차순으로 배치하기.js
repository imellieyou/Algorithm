function solution(n) {

   let sortedNum = n.toString().split('').sort((a, b) => b-a)
      
   return Number(sortedNum.reduce((acc, cur) => acc + cur, ''))
}