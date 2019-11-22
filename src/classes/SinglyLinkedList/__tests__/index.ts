import SinglyLinkedList from '../';

describe('Can create list', () => {
  test('Create an empty list', () => {
    const list = new SinglyLinkedList();

    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });
});

describe('Can add nodes', () => {
  test('First node added is head and tail', () => {
    const list = new SinglyLinkedList();

    list.push(43);

    expect(list.head!.value).toEqual(43);
    expect(list.tail!.value).toEqual(43);
    expect(list.length).toEqual(1);
  });

  test('Sequential nodes added are tail', () => {
    const list = new SinglyLinkedList();

    list.push(43);
    list.push('hello');

    expect(list.head!.value).toEqual(43);
    expect(list.tail!.value).toEqual('hello');
    expect(list.length).toEqual(2);
  });

  test('Node\'s next is set', () => {
    const list = new SinglyLinkedList();

    list.push(43);
    list.push('hello');

    expect(list.head!.value).toEqual(43);
    expect(list.head!.next!.value).toEqual('hello');
  });
});

describe('Can alter the list', () => {
  test('Can remove last node', () => {
    const list = new SinglyLinkedList();

    list.push(43);
    list.push('bye');
    list.push('hello');

    expect(list.length).toEqual(3);

    const popValue = list.pop();

    expect(popValue).toEqual('hello');
    expect(list.length).toEqual(2);
  });

  test('Can remove last node if also head', () => {
    const list = new SinglyLinkedList();

    list.push(43);

    expect(list.length).toEqual(1);

    const popValue = list.pop();

    expect(popValue).toEqual(43);
    expect(list.length).toEqual(0);
  });

  test('Return undefined if no nodes: pop', () => {
    const list = new SinglyLinkedList();
    const popValue = list.pop();

    expect(popValue).toEqual(undefined);
    expect(list.length).toEqual(0);
  });

  test('Can remove first node', () => {
    const list = new SinglyLinkedList();

    list.push('hello');
    list.push('you');

    expect(list.length).toEqual(2);

    const shiftedValue = list.shift();

    expect(shiftedValue).toEqual('hello');
    expect(list.head!.value).toEqual('you');
    expect(list.length).toEqual(1);
  });

  test('Return undefined if no nodes: shift', () => {
    const list = new SinglyLinkedList();
    const popValue = list.shift();

    expect(popValue).toEqual(undefined);
    expect(list.length).toEqual(0);
  });

  test('Can add nodes to front of list', () => {
    const list = new SinglyLinkedList();

    list.push(43);
    list.unshift(42);

    expect(list.length).toEqual(2);
    expect(list.head!.value).toEqual(42);
    expect(list.head!.next!.value).toEqual(43);
  });

  test('Can add nodes to front of empty list', () => {
    const list = new SinglyLinkedList();

    list.unshift(42);

    expect(list.length).toEqual(1);
    expect(list.head!.value).toEqual(42);
    expect(list.tail!.value).toEqual(42);
  });
});

describe('Can search the list', () => {
  test('Can get node by index', () => {
    const list = new SinglyLinkedList();

    list.push(42);
    list.push(43);
    list.push(44);

    const node = list.get(1);

    expect(node!.value).toEqual(43);
  });

  test('Returns null if empty: get', () => {
    const list = new SinglyLinkedList();

    const node = list.get(0);

    expect(node).toEqual(null);
  });

  test('Returns null if out of bounds: get', () => {
    const list = new SinglyLinkedList();

    list.push(100);

    const node = list.get(1);

    expect(node).toEqual(null);
  });
});

describe('Can change values of nodes', () => {
  test('Can set', () => {
    const list = new SinglyLinkedList();

    list.push(20);
    list.push('you');
    list.push('!');

    const isSet = list.set(0, 'Hey');

    expect(isSet).toBe(true);
    expect(list.head!.value).toBe('Hey');
  });

  test('Return false if set called out of bounds', () => {
    const list = new SinglyLinkedList();

    list.push(20);
    list.push('you');
    list.push('!');

    const isSet = list.set(3, 'Hey');

    expect(isSet).toBe(false);
    expect(list.length).toBe(3);
  });
});

describe('Can insert nodes', () => {
  test('Can insert', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(4);

    list.insert(2, 3);

    const node = list.get(2);

    expect(list.length).toBe(4);
    expect(node!.value).toBe(3);
  });

  test('Can insert to empty list', () => {
    const list = new SinglyLinkedList();

    list.insert(0, 'hi');

    expect(list.length).toBe(1);
    expect(list.head!.value).toBe('hi');
    expect(list.tail!.value).toBe('hi');
  });

  test('Can insert to end of list', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.insert(3, 4);

    expect(list.length).toBe(4);
    expect(list.tail!.value).toBe(4);
  });

  test('Return false if out of bounds', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);

    const inserted = list.insert(8, 4);

    expect(inserted).toBe(false);
  });

  test('Return false if less than 0', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);

    const inserted = list.insert(-1, 4);

    expect(inserted).toBe(false);
  });
});

describe('Can remove nodes', () => {
  test('Can remove', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const removed = list.remove(2);

    expect(removed).toBe(3);
    expect(list.length).toBe(3);
    expect(list.get(2)!.value).toBe(4);
  });

  test('Can remove first node', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const removed = list.remove(0);

    expect(removed).toBe(1);
    expect(list.length).toBe(3);
    expect(list.head!.value).toBe(2);
  });

  test('Can remove last node', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const removed = list.remove(3);

    expect(removed).toBe(4);
    expect(list.length).toBe(3);
    expect(list.tail!.value).toBe(3);
  });

  test('Can remove only node', () => {
    const list = new SinglyLinkedList();

    list.push(1);

    const removed = list.remove(0);

    expect(removed).toBe(1);
    expect(list.length).toBe(0);
  });

  test('Returns undefined if out of bounds: index = length', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const removed = list.remove(4);

    expect(removed).toBe(undefined);
    expect(list.length).toBe(4);
  });

  test('Returns undefined if out of bounds: index > length', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const removed = list.remove(7);

    expect(removed).toBe(undefined);
    expect(list.length).toBe(4);
  });

  test('Returns undefined if empty list', () => {
    const list = new SinglyLinkedList();

    const removed = list.remove(7);

    expect(removed).toBe(undefined);
  });

  test('Returns undefined if index < 0', () => {
    const list = new SinglyLinkedList();

    list.push(1);

    const removed = list.remove(-1);

    expect(removed).toBe(undefined);
  });
});

describe('Can reverse list in place', () => {
  test('Can reverse', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    list.reverse();

    expect(list.head!.value).toBe(4);
    expect(list.head!.next!.value).toBe(3);
    expect(list.head!.next!.next!.value).toBe(2);
    expect(list.tail!.value).toBe(1);
  });
});