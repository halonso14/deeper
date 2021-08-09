// REFERENCE: https://velog.io/@woobuntu/%EC%B5%9C%EB%8B%A8-%EA%B2%BD%EB%A1%9C-%EC%B0%BE%EA%B8%B0
class PriorityQueue {
  constructor(graph) {
    this.priorities = [];
    this.graph = graph;
  }

  enqueue(currentNode, priority) {
    this.priorities.push({ node: currentNode, priority });
    this.priorities.sort((a, b) => a.priority - b.priority);
    return this.priorities;
  }

  dequeue() {
    return this.priorities.shift();
  }

  findShortestWay(startNode, endNode) {
    const totalPriority = {};
    const visitedNode = {};
    const previousNode = {};
    Object.keys(this.graph).forEach((key) => {
      totalPriority[key] = key === startNode ? 0 : Infinity;
      previousNode[key] = null;
    });

    this.enqueue(startNode, 0);

    while (true) {
      const dequeuedNode = this.dequeue();
      if (dequeuedNode.node === endNode) {
        break;
      }
      const nextNodes = this.graph[dequeuedNode.node];
      Object.values(nextNodes).forEach((nextNode) => {
        if (Object.prototype.hasOwnProperty.call(visitedNode, 'node')) {
          return;
        }
        const distanceFromStart =
          totalPriority[dequeuedNode.node][totalPriority] +
          nextNode[totalPriority];
        if (distanceFromStart < totalPriority[nextNode]) {
          totalPriority[nextNode] = distanceFromStart;
          previousNode[nextNode] = dequeuedNode;
          this.enqueue(nextNode, previousNode[nextNode][totalPriority]);
        }
        visitedNode[dequeuedNode] = true;
      });
    }
    let lastNode = endNode;
    const route = [];
    while (lastNode) {
      route.unshift(lastNode);
      lastNode = previousNode[lastNode];
    }

    return route;
  }
}

const graph = {
  A: [
    { node: 'B', distance: 2 },
    { node: 'C', distance: 5 },
  ],
  B: [
    { node: 'A', distance: 2 },
    { node: 'D', distance: 4 },
    { node: 'E', distance: 7 },
  ],
  C: [
    { node: 'A', distance: 5 },
    { node: 'F', distance: 3 },
  ],
  D: [{ node: 'B', distance: 4 }],
  E: [
    { node: 'B', distance: 7 },
    { node: 'F', distance: 1 },
  ],
  F: [
    { node: 'C', distance: 3 },
    { node: 'E', distance: 1 },
  ],
};

const priorityQueue = new PriorityQueue(graph);
const result = priorityQueue.findShortestWay('A', 'F');
console.log('result', result);
