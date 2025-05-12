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

  depthFirstSearch(startingNode) {
    const nodeStack = [];
    const visited = {};

    nodeStack.push(startingNode);
    visited[startingNode] = true;

    while (nodeStack.length) {
      const currentNode = nodeStack.pop();
      const neighbors = this.adjList[currentNode];
      console.log(currentNode);

      neighbors.forEach((neighbor) => {
        // If wasnt visited
        if (!visited[neighbor]) {
          nodeStack.push(neighbor);
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
