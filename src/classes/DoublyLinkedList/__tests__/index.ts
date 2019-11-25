import DoublyLinkedList from '../';

describe('====DOUBLY LINKED LIST====', () => {
  test('Can create an empty list', () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('Can push node to end of list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);

    expect(list.length).toBe(2);
    expect(list.head!.value).toBe(1);
    expect(list.tail!.value).toBe(2);
    expect(list.head!.previous).toBe(null);
    expect(list.head!.next!.value).toBe(2);
    expect(list.tail!.previous!.value).toBe(1);
    expect(list.tail!.next).toBe(null);
  });
});
