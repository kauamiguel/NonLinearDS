class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    if (!this.adjList[node]) {
      this.adjList[node] = [];
    }
  }

  addEdge(node1, node2) {
    this.addNode(node1);
    this.addNode(node2);
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  breadthFirstSearc(startingNode) {
    const queue = [];
    const visited = {};

    queue.push(startingNode);
    visited[startingNode] = true;

    while (queue.length) {
      const currentNode = queue[0];
      const neighbors = this.adjList[currentNode];

      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }
}

const adjList = new Graph();
adjList.addEdge(1, 2);
adjList.addEdge(1, 3);
adjList.addEdge(1, 4);
adjList.addEdge(2, 5);
adjList.addEdge(5, 9);
adjList.addEdge(3, 6);
adjList.addEdge(3, 7);
adjList.addEdge(6, 10);
adjList.addEdge(4, 8);
console.log(adjList);
adjList.depthFirstSearch(1);
