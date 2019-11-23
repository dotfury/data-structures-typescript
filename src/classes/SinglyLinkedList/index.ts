import Node from '../Node';

type NodeType = Node | null;
type ValueType = string | number;

export default class SinglyLinkedList {
  length: number;
  head: NodeType;
  tail: NodeType;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: ValueType): SinglyLinkedList {
    const node = new Node(value);

    if (this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }

    this.length++;

    return this;
  }

  pop(): any {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head === this.tail) {
      const { value } = this.head!;

      this.head = null;
      this.tail = this.head;
      this.length--;

      return value;
    }

    let currentNode = this.head;

    while (currentNode) {
      const nextNode = currentNode.next;

      if (nextNode!.next === null) {
        const { value } = nextNode!;

        currentNode.next = null;
        this.tail = currentNode;
        this.length--;

        return value;
      }

      currentNode = currentNode.next;
    }
  }

  shift(): any {
    if (this.length === 0) {
      return undefined;
    }

    const { value } = this.head!;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }

    this.length--;

    return value;
  }

  unshift(value: ValueType): SinglyLinkedList {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index: number): NodeType {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      currentNode = currentNode!.next;
      count++;
    }

    return currentNode;
  }

  set(index: number, value: ValueType): boolean {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;

    return true;
  }

  insert(index: number, value: ValueType): boolean {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      const prevNode = this.get(index -1);
      const insertNode = new Node(value);

      insertNode.next = prevNode!.next;
      prevNode!.next = insertNode;
      this.length++;
    }

    return true;
  }

  remove(index: number): ValueType | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      const prevNode = this.get(index - 1);
      const removedNode = prevNode!.next;

      prevNode!.next = removedNode!.next;
      this.length--;

      return removedNode!.value;
    }
  }

  reverse(): SinglyLinkedList {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

}
