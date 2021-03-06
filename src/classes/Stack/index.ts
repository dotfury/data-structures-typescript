import Node from '../Node';
import  { NodeType, ValueType } from '../../types';

export default class Stack {
  first: NodeType;
  last: NodeType;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: ValueType): void {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      const oldTopNode = this.first;

      this.first = node;
      node.next = oldTopNode;
    }

    this.size++;
  }

  pop(): ValueType | null {
    if (this.size === 0) {
      return null;
    } else {
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
}