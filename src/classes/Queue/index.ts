import Node from '../Node';
import { ValueType, NodeType } from '../../types';

export default class Queue {
  first: NodeType;
  last: NodeType;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value: ValueType): void {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
    } else {
      this.last!.next = node;
    }

    this.last = node;
    this.size++;
  }

  dequeue(): ValueType | null {
    if (this.size === 0) {
      return null;
    }

    const { value } = this.first!;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }

    this.size--;
    return value;
  }
}