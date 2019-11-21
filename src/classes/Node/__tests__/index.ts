import Node from '../';

describe('Can create a node', () => {
  test('Can set value', () => {
    const node = new Node(10);

    expect(node.value).toBe(10);
  });

  test('Default next is null', () => {
    const node = new Node(10);

    expect(node.next).toBe(null);
  });
});