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
});