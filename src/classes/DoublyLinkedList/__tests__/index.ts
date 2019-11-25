import DoublyLinkedList from '../';

describe('Can create a doubly linked list', () => {
  test('Can create an empty list', () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});