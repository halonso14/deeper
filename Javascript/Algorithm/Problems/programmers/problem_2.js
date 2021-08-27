function findIndexOfMatchingString(substring, string) {
  const matchingIndices = [];
  let i = -1;
  // eslint-disable-next-line no-cond-assign
  while ((i = string.indexOf(substring, i + 1)) >= 0) matchingIndices.push(i);
  return matchingIndices;
}

function createNewString(prevWord, word) {
  if (prevWord === word) {
    return word;
  }
  const matchingIndices = findIndexOfMatchingString('110', word);
  const entry = [prevWord || undefined, word];
  while (matchingIndices.length) {
    const index = matchingIndices.shift();
    const tmpWord1 = `110${word.slice(0, index)}${word.slice(index + 3)}`;
    const tmpWord2 = `${word.slice(0, index) + word.slice(index + 3)}110`;
    entry.push(tmpWord1);
    entry.push(tmpWord2);
  }
  const newWord = entry.sort()[0];
  return createNewString(word, newWord);
}

export default function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i += 1) {
    answer.push(createNewString('', s[i]));
  }
  console.log(answer);

  return answer;
}
