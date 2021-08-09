import Graph from '../DataStructure/Graph';

export default class GraphSearch extends Graph {
  constructor() {
    super();
    this.adjacencyList = {};
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((adjacentVertex) => {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      });
    }
    return result;
  }

  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const { adjacencyList } = this;
    // eslint-disable-next-line consistent-return
    function dfs(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((adjacentVertex) => {
        if (!visited[adjacentVertex]) {
          return dfs(adjacentVertex);
        }
        return null;
      });
    }

    dfs(start);
    return result;
  }
}
