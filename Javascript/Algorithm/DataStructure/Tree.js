// REFERENCE: https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%ED%8A%B8%EB%A6%AC-bfs-dfs-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-e96bcdadd1f3
import TreeNode from './TreeNode';

export default class Tree {
  constructor(data) {
    this.root = new TreeNode(data);
  }

  BFS(callback) {
    if (this.root === null) return;

    const unvisitedNodeQueue = [this.root];
    while (unvisitedNodeQueue.length !== 0) {
      const currentNode = unvisitedNodeQueue.shift();
      unvisitedNodeQueue.push(...currentNode.children);
      callback(currentNode);
    }
  }

  DFS(callback) {
    if (this.root === null) return;

    const unvisitedNodeList = [this.root];
    while (unvisitedNodeList.length !== 0) {
      const currentNode = unvisitedNodeList.shift();
      unvisitedNodeList.unshift(...currentNode.children);
      callback(currentNode);
    }
  }
}
