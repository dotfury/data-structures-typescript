import { ValueType } from '../../types';

class Node {
  value: ValueType;
  left: Node | null;
  right: Node | null;

  constructor(value: ValueType) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  checkNode(direction: string, node: Node, newNode: Node): void {
    if (node[direction] === null) {
      node[direction] = newNode;
    } else if (newNode!.value > node[direction]!.value) {
      this.checkNode('right', node[direction], newNode);
    } else if (newNode!.value < node[direction]!.value) {
      this.checkNode('left', node[direction], newNode);
    }
  }

  insert(value: ValueType): BinarySearchTree {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      if (value > this.root!.value) {
        this.checkNode('right', this.root, node);
      } else if (value < this.root!.value) {
        this.checkNode('left', this.root, node);
      }
    }

    return this;
  }
}