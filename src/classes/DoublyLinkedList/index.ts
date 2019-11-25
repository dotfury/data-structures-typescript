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
 }