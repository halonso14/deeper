// FIXME not done
export default function solution(genres, plays) {
  const answer = [];
  function createPlaysGraph() {
    const playsGraph = {};
    for (let i = 0; i < genres.length; i += 1) {
      if (playsGraph[genres[i]]) {
        playsGraph[genres[i]].plays.push({ i: plays[i] });
        playsGraph[genres[i]].count += 1;
      } else {
        playsGraph[genres[i]] = {
          count: 1,
          plays: [{ i: plays[i] }],
        };
      }
    }
    return playsGraph;
  }
  const playsGraph = createPlaysGraph();

  console.log('playsGraph', playsGraph);
  return answer;
}
