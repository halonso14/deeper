function createRule(s) {
  let message;
  const wordLength = s.length;
  const count = s.match(/[?]/g).length;
  const firstIndex = s.indexOf('?');
  if (firstIndex) {
    message = s.substr(0, wordLength - count);
    return {
      message,
      length: message.length,
      index: 0,
    };
  }
  message = s.substr(wordLength - 1, wordLength - count);
  return {
    message,
    length: message.length,
    index: count,
  };
}

export default function solution(words, queries) {
  const answer = [];
  for (let i = 0; i < queries.length; i += 1) {
    let count = 0;
    const query = queries[i];
    for (let j = 0; j < words.length; j += 1) {
      const word = words[j];
      const { message, length, index } = createRule(query);
      if (word.length === query.length) {
        const comparingString = word.substr(index, length);
        if (message === comparingString) {
          count += 1;
        }
      }
    }
    answer.push(count);
  }

  return answer;
}
