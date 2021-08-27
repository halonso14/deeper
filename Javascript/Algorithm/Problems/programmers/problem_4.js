function hanoi(stack, n, start, end, middle) {
  if (n === 0) {
    return;
  }
  hanoi(stack, n - 1, start, middle, end);
  stack.push([start, end]);
  hanoi(stack, n - 1, middle, end, start);
}

export default function solution(n) {
  const answer = [];
  hanoi(answer, n, 1, 3, 2);

  console.log('hanoi', answer, answer.length);

  return answer;
}
