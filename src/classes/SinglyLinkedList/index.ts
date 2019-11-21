import Node from '../Node';

export default class SinglyLinkedList {
  length: number;
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: string | number): SinglyLinkedList {
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

  unshift(value: string | number): SinglyLinkedList {
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

  get(index: number): Node | null {
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

  set(index: number, value: string | number): boolean {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;

    return true;
  }

}
