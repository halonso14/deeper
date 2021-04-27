function getZippedString(s, length) {
  let result = '';
  let prevString = '';
  let duplicationCount = 1;
  for (let i = 0; i < s.length; i += length) {
    const currentString = s.substr(i, length);

    if (currentString === prevString && i >= s.length - length) {
      duplicationCount++;
      if (duplicationCount > 1) {
        result += String(duplicationCount);
      }
      result += prevString;
      continue;
    } else if (currentString === prevString) {
      duplicationCount++;
      continue;
    }

    if (duplicationCount > 1) {
      result += String(duplicationCount);
    }
    result += prevString;
    prevString = currentString;
    duplicationCount = 1;
    if (i >= s.length - length) {
      result += prevString;
    }
  }
  return result;
}

function solution(s) {
  var answer = s.length;
  for (let i = 1; i <= s.length; i++) {
    let tempResult = getZippedString(s, i);
    if (tempResult.length < answer) {
      answer = tempResult.length;
    }
  }
  return answer;
}
