function createRegEx(s) {
  const wordLength = s.length;
  const count = s.match(/[?]/g).length;
  const firstIndex = s.indexOf('?');
  if (firstIndex) {
    return new RegExp(
      `^${s.substr(0, wordLength - count)}[a-z]{${count}}$`,
      'g'
    );
  }
  return new RegExp(
    `^[a-z]{${count}}${s.substr(wordLength - 1, wordLength - count)}$`,
    'g'
  );
}

function solution(words, queries) {
  var answer = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      const regex = createRegEx(queries[i]);
      if (words[j].length === queries[i].length) {
        const result = words[j].match(regex);
        if (result) {
          count++;
        }
      }
    }
    answer.push(count);
  }

  return answer;
}

const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?'];

console.log('start');
console.log(solution(words, queries));
