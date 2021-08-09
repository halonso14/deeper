// REFERENCE: https://velog.io/@woobuntu/%EC%B5%9C%EB%8B%A8-%EA%B2%BD%EB%A1%9C-%EC%B0%BE%EA%B8%B0
class PriorityQueue {
  constructor(graph) {
    this.values = [];
    this.graph = graph;
  }

  enqueue(name, priority) {
    this.values.push({ name, priority });
    this.values.sort((a, b) => a.priority - b.priority);
    return this.values;
  }

  dequeue() {
    return this.values.shift();
  }

  findShortestWay(start, end) {
    const distance = {};
    const visitedHash = {};
    const previous = {};
    Object.keys(this.graph).forEach((key) => {
      distance[key] = key === start ? 0 : Infinity;
      previous[key] = null;
    });

    this.enqueue(start, 0);

    while (true) {
      const dequeued = this.dequeue().name;
      if (dequeued === end) {
        break;
      }
      const neighbors = this.graph[dequeued];
      Object.values(neighbors).forEach((currentNeighbor) => {
        if (Object.prototype.hasOwnProperty.call(visitedHash, 'name')) {
          return;
        }
        const distanceFromStart = distance[dequeued] + 1;
        if (distanceFromStart < distance[currentNeighbor]) {
          distance[currentNeighbor] = distanceFromStart;
          previous[currentNeighbor] = dequeued;
          this.enqueue(currentNeighbor, distanceFromStart);
        }
        visitedHash[dequeued] = true;
      });
    }
    let node = end;
    const route = [];
    while (node) {
      route.unshift(node);
      node = previous[node];
    }
    return route;
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const weightedGraph = {
  A: { B: 3, C: 2 },
  B: { A: 3, D: 4, E: 1 },
  C: { A: 2, F: 5 },
  D: { B: 4 },
  E: { B: 1, F: 2 },
  F: { C: 5, E: 2 },
};

const priorityQueue = new PriorityQueue(graph);
const result = priorityQueue.findShortestWay('A', 'F');
console.log('result', result);
