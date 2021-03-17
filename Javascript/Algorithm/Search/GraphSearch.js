import Graph from '../DataStructure/Graph';

export class GraphSearch extends Graph {
  constructor() {
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
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((adjacentVertex) => {
        if (!visited[adjacentVertex]) return dfs(adjacentVertex);
      });
    }

    dfs(start);
    return result;
  }
}
