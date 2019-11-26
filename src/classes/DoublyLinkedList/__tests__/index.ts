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

  test('Can pop node off the end of list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);

    expect(list.length).toBe(2);

    const popped = list.pop();

    expect(list.length).toBe(1);
    expect(popped).toBe(2);
    expect(list.head!.value).toBe(1);
    expect(list.tail!.value).toBe(1);
    expect(list.tail!.next).toBe(null);
  });

  test('Can pop only node out of list', () => {
    const list = new DoublyLinkedList();

    list.push(1);

    expect(list.length).toBe(1);

    const popped = list.pop();

    expect(list.length).toBe(0);
    expect(popped).toBe(1);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('Return undefined if empty list: pop', () => {
    const list = new DoublyLinkedList();
    const popped = list.pop();

    expect(list.length).toBe(0);
    expect(popped).toBe(undefined);
  });

  test('Return undefined if empty list: shift', () => {
    const list = new DoublyLinkedList();
    const shifted = list.shift();

    expect(list.length).toBe(0);
    expect(shifted).toBe(undefined);
  });

  test('Can shift list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);

    const shifted = list.shift();

    expect(list.length).toBe(1);
    expect(shifted).toBe(1);
    expect(list.head!.value).toBe(2);
    expect(list.tail!.value).toBe(2);
  });

  test('Can shift only node in list', () => {
    const list = new DoublyLinkedList();

    list.push(1);

    const shifted = list.shift();

    expect(list.length).toBe(0);
    expect(shifted).toBe(1);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});
