class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
  }

  enqueue(name, priority) {
    this.priorityQueue.push({ name, priority });
    this.priorityQueue.sort((a, b) => a.priority - b.priority);
    return this.priorityQueue;
  }

  dequeue() {
    return this.priorityQueue.shift();
  }
}

function findSmallestPriority(graph, startNodeName, endNodeName) {
  const priorityQueue = new PriorityQueue();
  const priorityFromStartNode = {};
  const visitedNode = {};
  const previousNode = {};
  Object.keys(graph).forEach((key) => {
    priorityFromStartNode[key] = key === startNodeName ? 0 : Infinity;
    previousNode[key] = null;
  });

  priorityQueue.enqueue(startNodeName, 0);

  while (true) {
    const { name: dequeuedNodeName } = priorityQueue.dequeue();
    if (dequeuedNodeName === endNodeName) {
      break;
    }
    const neighbors = graph[dequeuedNodeName];
    Object.entries(neighbors).forEach(([name, priority]) => {
      if (Object.prototype.hasOwnProperty.call(visitedNode, 'name')) {
        return;
      }
      const currentPriority =
        priorityFromStartNode[dequeuedNodeName] + priority;

      if (currentPriority < priorityFromStartNode[name]) {
        priorityFromStartNode[name] = currentPriority;
        previousNode[name] = dequeuedNodeName;
        priorityQueue.enqueue(name, currentPriority);
      }
      visitedNode[dequeuedNodeName] = true;
    });
  }

  let nodeName = endNodeName;
  const route = [];
  while (nodeName) {
    route.unshift(nodeName);
    nodeName = previousNode[nodeName];
  }
  return { route, priority: priorityFromStartNode[endNodeName] };
}

const graph = {
  A: { B: 3, C: 2 },
  B: { A: 3, D: 4, E: 1 },
  C: { A: 2, F: 5 },
  D: { B: 4 },
  E: { B: 1, F: 2 },
  F: { C: 5, E: 2 },
};

const result = findSmallestPriority(graph, 'A', 'F');
console.log('result', result);
