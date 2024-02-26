let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const row = Number(input[0]);
function isGroupWord(word) {
  const letterSeen = {};
  let prevLetter = '';

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letterSeen[letter] && letter !== prevLetter) {
      return false;
    }
    letterSeen[letter] = true;
    prevLetter = letter;
  }

  return true;
}

let groupWordCount = 0;
for (let i = 1; i <= row; i++) {
  if (isGroupWord(input[i])) {
    groupWordCount++;
  }
}

console.log(groupWordCount);
