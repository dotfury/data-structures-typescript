interface IVisitedObject {
  [key: string]: boolean;
}

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

  dfsr(vertex: string): string[] | null {
    const results: string[] = [];
    const visited: IVisitedObject = {};
    const adjacencyList = this.adjacencyList;

    function helper(vertex: string) {
      if (!adjacencyList[vertex]) {
        return null;
      }

      results.push(vertex);
      visited[vertex] = true;

      adjacencyList[vertex].forEach((item: string) => {
        if (!visited[item]) {
          return helper(item);
        }

        return;
      });
    }

    helper(vertex);

    return results;
  }

  dfsi(vertex: string): string[] | null {
    const results: string[] = [];
    const visited: IVisitedObject = {};
    const stack: any[] = [];

    if (!this.adjacencyList[vertex]) {
      return null;
    }

    stack.push(vertex);

    while (stack.length > 0) {
      const item = stack.pop();

      if (!visited[item]) {
        visited[item] = true;
        results.push(item);

        this.adjacencyList[item].forEach((neighbor: string) => {
          stack.push(neighbor);
        });
      }
    }

    return results;
  }

  bfs(vertex: string): string[] | null {
    const queue: any[] = [];
    const results: string[] = [];
    const visited: IVisitedObject = {};

    if (!this.adjacencyList[vertex]) {
      return null;
    }

    queue.push(vertex);
    visited[vertex] = true;

    while (queue.length > 0) {
      const item = queue.shift();

      results.push(item);

      this.adjacencyList[item].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return results;
  }
}
