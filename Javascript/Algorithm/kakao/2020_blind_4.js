function createRule(s) {
  let message;
  const wordLength = s.length;
  const count = s.match(/[?]/g).length;
  const firstIndex = s.indexOf('?');
  if (firstIndex) {
    message = s.substr(0, wordLength - count)
    return {
      message,
      length: message.length,
      index: 0
    };
  }
  message = s.substr(wordLength - 1, wordLength - count);
  return {
    message,
    length: message.length,
    index: count
  };
}

function solution(words, queries) {
  var answer = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    const query = queries[i];
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      const { message, length, index } = createRule(query);
      if (word.length === query.length) {
        const comparingString = word.substr(index, length);
        if (message === comparingString) {
          count++;
        }
      }
    }
    answer.push(count);
  }

  return answer;
}

const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?', '?????'];

console.log(solution(words, queries));
