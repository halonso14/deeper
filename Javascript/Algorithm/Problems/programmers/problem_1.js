function pushAvailableNumber(availableNumbers, number) {
  function validateNumber() {
    if (number % 1 !== 0) {
      return false;
    }
    if (number < 1) {
      return false;
    }
    if (availableNumbers.find((available) => available === number)) {
      return false;
    }
    return true;
  }

  if (validateNumber()) {
    availableNumbers.push(number);
  }
}

export default function solution(N, number) {
  function checkAvailableNumbers(level, availableNumbers) {
    if (level > 8) {
      return -1;
    }

    const iter = availableNumbers.length;
    for (let i = 0; i < iter; i += 1) {
      pushAvailableNumber(availableNumbers, availableNumbers[i] + N);
      pushAvailableNumber(availableNumbers, availableNumbers[i] - N);
      pushAvailableNumber(availableNumbers, N - availableNumbers[i]);
      pushAvailableNumber(availableNumbers, availableNumbers[i] * N);
      pushAvailableNumber(availableNumbers, availableNumbers[i] / N);
      pushAvailableNumber(availableNumbers, N / availableNumbers[i]);
    }

    let defaultNumber = '';
    for (let i = 0; i < level; i += 1) {
      defaultNumber += N;
    }
    pushAvailableNumber(availableNumbers, parseInt(defaultNumber, 10));

    if (availableNumbers.find((available) => available === number) >= 0) {
      return level;
    }

    return checkAvailableNumbers(level + 1, availableNumbers);
  }

  if (N === number) {
    return 1;
  }

  const answer = checkAvailableNumbers(2, [N]);

  return answer;
}
