import BinarySearchTree from '../../../';
import breadthFirstSearch from '../';

describe('====BINARY SEARCH TREE: BREADTH FIRST SEARCH====', () => {
  test('Can search a simple BST', () => {
    const list = new BinarySearchTree();

    list.insert(10);
    list.insert(6);
    list.insert(15);
    list.insert(3);
    list.insert(8);
    list.insert(20);

    const values = breadthFirstSearch(list);

    expect(values.length).toBe(6);
    expect(values).toEqual([10, 6, 15, 3, 8, 20]);
  });
});