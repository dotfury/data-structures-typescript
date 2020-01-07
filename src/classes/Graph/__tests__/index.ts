import Graph from '../';

describe('====GRAPH====', () => {
  test('Can create an empty graph', () => {
    const graph = new Graph();

    expect(graph.adjacencyList).toEqual({});
  });

  test('Can add vertex to graph', () => {
    const graph = new Graph();

    graph.addVertex('hello');

    expect(graph.adjacencyList).toEqual({'hello': []});
  });

  test('Can add edges', () => {
    const graph = new Graph();

    graph.addVertex('hello');
    graph.addVertex('goodbye');
    graph.addEdge('hello', 'goodbye');

    expect(graph.adjacencyList['hello'].length).toEqual(1);
    expect(graph.adjacencyList['goodbye'].length).toEqual(1);
  });

  test('Can remove edges', () => {
    const graph = new Graph();

    graph.addVertex('hello');
    graph.addVertex('goodbye');
    graph.addEdge('hello', 'goodbye');

    expect(graph.adjacencyList['hello'].length).toEqual(1);
    expect(graph.adjacencyList['goodbye'].length).toEqual(1);

    graph.removeEdge('hello', 'goodbye');

    expect(graph.adjacencyList['hello'].length).toEqual(0);
    expect(graph.adjacencyList['goodbye'].length).toEqual(0);
  });

  test('Can remove vertices', () => {
    const graph = new Graph();

    graph.addVertex('hello');
    graph.addVertex('goodbye');
    graph.addVertex('you');
    graph.addVertex('friend');
    graph.addEdge('hello', 'goodbye');
    graph.addEdge('you', 'goodbye');
    graph.addEdge('fiend', 'goodbye');
    graph.removeVertex('goodbye');

    expect(graph.adjacencyList['hello'].length).toEqual(0);
    expect(graph.adjacencyList['you'].length).toEqual(0);
    expect(graph.adjacencyList['friend'].length).toEqual(0);
    expect(graph.adjacencyList['goodbye']).toEqual(undefined);
  });
});
