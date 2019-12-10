import BinarySearchTree from '../';

describe('====BINARY SEARCH TREE====', () => {
  test('Can create an empty BST', () => {
    const bst = new BinarySearchTree();

    expect(bst.root).toBe(null);
  });

  test('Can insert to empty BST', () => {
    const bst = new BinarySearchTree();

    bst.insert(1);

    expect(bst.root!.value).toBe(1);
  });

  test('Can insert to BST', () => {
    const bst = new BinarySearchTree();

    bst.insert(1);
    bst.insert(8);
    bst.insert(7);
    bst.insert(12);
    bst.insert(3);
    bst.insert(11);

    expect(bst.root!.right!.value).toBe(8);
    expect(bst.root!.right!.left!.value).toBe(7);
    expect(bst.root!.right!.left!.left!.value).toBe(3);
    expect(bst.root!.right!.right!.value).toBe(12);
    expect(bst.root!.right!.right!.left!.value).toBe(11);
  });

  test('Cannot insert to duplicate', () => {
    const bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(4);
    bst.insert(5);
    bst.insert(6);
    bst.insert(5);

    expect(bst.root!.value).toBe(5);
    // 6
    expect(bst.root!.right!.value).toBe(6);
    expect(bst.root!.right!.right).toBe(null);
    expect(bst.root!.right!.left).toBe(null);
    // 4
    expect(bst.root!.left!.value).toBe(4);
    expect(bst.root!.left!.right).toBe(null);
    expect(bst.root!.left!.left).toBe(null);
  });

  test('Can search for a node in a BST', () => {
    const bst = new BinarySearchTree();

    bst.insert(1);
    bst.insert(8);
    bst.insert(7);
    bst.insert(12);
    bst.insert(3);
    bst.insert(11);

    const foundA = bst.search(12);
    const foundB = bst.search(1);
    const foundC = bst.search(3);
    const lost = bst.search(6);

    expect(foundA).toBe(true);
    expect(foundB).toBe(true);
    expect(foundC).toBe(true);
    expect(lost).toBe(false);
  });

  test('Return false for empty BST: search', () => {
    const bst = new BinarySearchTree();
    const lost = bst.search(6);

    expect(lost).toBe(false);
  });

  test('Can perform Breadth First Search on a simple BST', () => {
    const list = new BinarySearchTree();

    list.insert(10);
    list.insert(6);
    list.insert(15);
    list.insert(3);
    list.insert(8);
    list.insert(20);

    const values = list.breadthFirstSearch();

    expect(values.length).toBe(6);
    expect(values).toEqual([10, 6, 15, 3, 8, 20]);
  });

  test('Can perform Depth First Search on a simple BST: PreOrder', () => {
    const list = new BinarySearchTree();

    list.insert(10);
    list.insert(6);
    list.insert(15);
    list.insert(3);
    list.insert(8);
    list.insert(20);

    const values = list.preOrder();

    expect(values.length).toBe(6);
    expect(values).toEqual([10, 6, 3, 8, 15, 20]);
  });

  test('Can perform Depth First Search on a simple BST: PostOrder', () => {
    const list = new BinarySearchTree();

    list.insert(10);
    list.insert(6);
    list.insert(15);
    list.insert(3);
    list.insert(8);
    list.insert(20);

    const values = list.postOrder();

    expect(values.length).toBe(6);
    expect(values).toEqual([3, 8, 6, 20, 15, 10]);
  });

  test('Can perform Depth First Search on a simple BST: InOrder', () => {
    const list = new BinarySearchTree();

    list.insert(10);
    list.insert(6);
    list.insert(15);
    list.insert(3);
    list.insert(8);
    list.insert(20);

    const values = list.inOrder();

    expect(values.length).toBe(6);
    expect(values).toEqual([3, 6, 8, 10, 15, 20]);
  });
});