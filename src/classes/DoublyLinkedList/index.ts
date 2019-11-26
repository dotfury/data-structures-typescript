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
 }