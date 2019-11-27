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

  test('Can add node to the beginning of the list: unshift', () => {
    const list = new DoublyLinkedList();

    list.push(2);

    expect(list.length).toBe(1);

    list.unshift(1);

    expect(list.length).toBe(2);
    expect(list.head!.value).toBe(1);
    expect(list.head!.previous).toBe(null);
    expect(list.tail!.value).toBe(2);
    expect(list.tail!.previous).not.toBe(null);
  });

  test('Can add node to empty list: unshift', () => {
    const list = new DoublyLinkedList();

    list.unshift(1);

    expect(list.length).toBe(1);
    expect(list.head!.value).toBe(1);
    expect(list.tail!.value).toBe(1);
    expect(list.head!.previous).toBe(null);
  });

  test('Can get node from first half of list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const node = list.get(2);

    expect(node!.value).toBe(3);
  });

  test('Can get node from second half of list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const node = list.get(4);

    expect(node!.value).toBe(5);
  });

  test('Can get first node from list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const node = list.get(0);

    expect(node!.value).toBe(1);
  });

  test('Can get last node from list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const node = list.get(6);

    expect(node!.value).toBe(7);
  });

  test('Return null if out of list bounds: index < 0', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const node = list.get(-1);

    expect(node).toBe(null);
  });

  test('Return null if out of list bounds: index > length', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);

    const node = list.get(8);

    expect(node).toBe(null);
  });

  test('Can set value of a node in the list', () => {
    const list = new DoublyLinkedList();

    list.push('hello');
    list.push('where');
    list.push('Tom');

    const changed = list.set(1, 'there');
    const node = list.get(1);

    expect(changed).toBe(true);
    expect(node!.value).toBe('there');
  });

  test('Return false if node not found: set', () => {
    const list = new DoublyLinkedList();

    list.push('hello');

    const changed = list.set(1, 'there');

    expect(changed).toBe(false);
    expect(list.length).toBe(1);
  });

  test('Can insert node at begging of list', () => {
    const list = new DoublyLinkedList();

    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    const inserted = list.insert(0, 1);

    expect(inserted).toBe(true);
    expect(list.head!.value).toBe(1);
    expect(list.length).toBe(5);
  });

  test('Can insert node at end of list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const inserted = list.insert(4, 5);

    expect(inserted).toBe(true);
    expect(list.tail!.value).toBe(5);
    expect(list.length).toBe(5);
  });

  test('Can insert node in list', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(5);

    const inserted = list.insert(3, 4);
    const node = list.get(3);

    expect(inserted).toBe(true);
    expect(node!.value).toBe(4);
    expect(list.length).toBe(5);
  });

  test('Return false on insert: index < 0', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(5);

    const inserted = list.insert(-3, 4);
    
    expect(inserted).toBe(false);
    expect(list.length).toBe(4);
  });

  test('Return false on insert: index > length', () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(5);

    const inserted = list.insert(5, 6);
    
    expect(inserted).toBe(false);
    expect(list.length).toBe(4);
  });
});
