// REFERENCE: https://velog.io/@woobuntu/%EC%B5%9C%EB%8B%A8-%EA%B2%BD%EB%A1%9C-%EC%B0%BE%EA%B8%B0
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(name, priority) {
    this.queue.push({ name, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }
}

function findShortestWay(graph, start, end) {
  const distance = {};
  const visitedHash = {};
  const previous = {};
  const queue = new Queue();
  Object.keys(graph).forEach((key) => {
    distance[key] = key === start ? 0 : Infinity;
    previous[key] = null;
  });

  queue.enqueue(start, 0);

  while (true) {
    const dequeued = queue.dequeue().name;
    if (dequeued === end) {
      break;
    }
    const neighbors = graph[dequeued];
    Object.values(neighbors).forEach((currentNeighbor) => {
      if (Object.prototype.hasOwnProperty.call(visitedHash, 'name')) {
        return;
      }
      const distanceFromStart = distance[dequeued] + 1;
      if (distanceFromStart < distance[currentNeighbor]) {
        distance[currentNeighbor] = distanceFromStart;
        previous[currentNeighbor] = dequeued;
        queue.enqueue(currentNeighbor, distanceFromStart);
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

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const result = findShortestWay(graph, 'A', 'F');
console.log('result', result);
