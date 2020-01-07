export default class Graph {
  adjacencyList: {};

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name: string): void {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(v1: string, v2: string): void {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1: string, v2: string): void {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((item: string) => item !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((item: string) => item !== v1);
    }
  }

  removeVertex(vertex: string): void {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((item: string) => this.removeEdge(item, vertex));

      delete this.adjacencyList[vertex];
    }
  }
}
