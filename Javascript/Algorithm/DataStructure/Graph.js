// REFERENCE: https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/
// REFERENCE: https://ko.m.wikipedia.org/wiki/%EA%B9%8A%EC%9D%B4_%EC%9A%B0%EC%84%A0_%ED%83%90%EC%83%89

export class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex] = [];
        }
    }

    addEdge(source, destination) {
      if (!this.adjacencyList[source]) {
        this.addVertex(source);
      }
      if (!this.adjacencyList[destination]) {
        this.addVertex(destination);
      }
      this.adjacencyList[source].push(destination);
      this.adjacencyList[destination].push(source);
    }

    removeEdge(source, destination) {
      this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }

    removeVertex(vertex) {
      while (this.adjacencyList[vertex]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }  

    bfs(start)  { 
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(adjacentVertex => {
                if(!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true;
                    queue.push(adjacentVertex);
                }
            });
        }
        return result;
    };

    dfsRecursive(start)  {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(adjacentVertex => {
                if(!visited[adjacentVertex]) return dfs(adjacentVertex);
            });
        }

        dfs(start);
        return result;
    };
}