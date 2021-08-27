export default function solution(n, stations, w) {
  let answer = 0;
  const width = 2 * w + 1;

  function checkEmptySpotLength() {
    let prevEnd = 0;
    for (let i = 0; i < stations.length; i += 1) {
      const share = ((stations[i] - w - 1 - prevEnd) / width) >> 0;
      answer += share;
      const remainder = (stations[i] - w - 1 - prevEnd) % width;
      if (remainder > 0) {
        answer += 1;
      }
      prevEnd = stations[i] + w;
    }
    if (prevEnd < n) {
      answer += Math.ceil((n - prevEnd) / width);
    }
  }
  checkEmptySpotLength();

  console.log('solution', answer);

  return answer;
}
