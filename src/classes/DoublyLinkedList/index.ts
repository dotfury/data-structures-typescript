import Node from '../Node';
import  { NodeType, ValueType } from '../../types';

export default class DoublyLinkedList {
  head: NodeType;
  tail: NodeType;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: ValueType): DoublyLinkedList {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail!.next = node;
      node.previous = this.tail;
    }

    this.tail = node;
    this.length++;

    return this;
  }

  pop(): ValueType | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const removedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail!.previous;
      this.tail!.next = null;
      removedTail!.previous = null;
    }

    this.length--;

    return removedTail!.value;
  }

  shift(): ValueType | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const removedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead!.next;
      this.head!.previous = null;
      removedHead!.next = null;
    }

    this.length--;

    return removedHead!.value;
  }

  unshift(value: ValueType): DoublyLinkedList {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head!.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index: number): NodeType | null {
    if ( index < 0 || index >= this.length) {
      return null;
    }

    const middle = Math.floor(this.length / 2);
    let currentNode = null;

    if (index <= middle) {
      currentNode = this.head;
      let i = 0;

      while(i !== index) {
        currentNode = currentNode!.next;
        i++;
      }
    } else {
      currentNode = this.tail;
      let i = this.length - 1;

      while(i !== index) {
        currentNode = currentNode!.previous;
        i--;
      }
    }

    return currentNode;
  }

  set(index: number, value: ValueType): boolean {
    const node = this.get(index);

    if (node !== null) {
      node!.value = value;
      return true;
    }

    return false;
  }

  insert(index: number, value: ValueType): boolean {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const prevNode = this.get(index - 1);
      const node = new Node(value);

      node!.next = prevNode!.next;
      prevNode!.next!.previous = node;
      node!.previous = prevNode;
      prevNode!.next = node;
      this.length++;
    }

    return true;
  }

  remove(index: number): ValueType | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const node = this.get(index);
      node!.previous!.next = node!.next;
      node!.next!.previous = node!.previous;
      this.length--;

      return node!.value;
    }
  }

  reverse(): DoublyLinkedList {
    let currentNode = this.head;
    let tail = this.tail;

    while (currentNode !== null) {
      const next = currentNode!.next;

      currentNode!.next = currentNode!.previous;
      currentNode!.previous = next;
      currentNode = next;
    }

    this.tail = this.head;
    this.head = tail;

    return this;
  }
 }