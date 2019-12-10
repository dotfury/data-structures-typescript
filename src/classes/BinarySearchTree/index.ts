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

const DIRECTIONS = {
  RIGHT: 'right',
  LEFT: 'left'
};

export default class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  checkNode(direction: string, node: Node, newNode: Node): void {
    if (node[direction] === null) {
      node[direction] = newNode;
    } else if (newNode!.value > node[direction]!.value) {
      this.checkNode(DIRECTIONS.RIGHT, node[direction], newNode);
    } else if (newNode!.value < node[direction]!.value) {
      this.checkNode(DIRECTIONS.LEFT, node[direction], newNode);
    }
  }

  searchNode(direction: string, node: Node, value: ValueType): boolean {
    if (node[direction] === null) {
      return false;
    } else if (value > node[direction]!.value) {
      return this.searchNode(DIRECTIONS.RIGHT, node[direction], value);
    } else if (value < node[direction]!.value) {
      return this.searchNode(DIRECTIONS.LEFT, node[direction], value);
    }

    return true;
  }

  insert(value: ValueType): BinarySearchTree {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      if (value > this.root!.value) {
        this.checkNode(DIRECTIONS.RIGHT, this.root, node);
      } else if (value < this.root!.value) {
        this.checkNode(DIRECTIONS.LEFT, this.root, node);
      }
    }

    return this;
  }

  search(value: ValueType): boolean {
    let found = false;

    if (this.root === null) {
      return false;
    } else if (this.root!.value === value) {
      return true;
    } else {
      if (value > this.root!.value) {
        found = this.searchNode(DIRECTIONS.RIGHT, this.root, value);
      } else if (value < this.root!.value) {
        found = this.searchNode(DIRECTIONS.LEFT, this.root, value);
      }
    }

    return found;
  }

  breadthFirstSearch(): ValueType[] {
    let queue = [];
    let values = [];
    let node = null;

    queue.push(this.root);
  
    while(queue.length > 0) {
      node = queue.shift();
  
      if (node!.left !== null) {
        queue.push(node!.left);
      }
  
      if (node!.right !== null) {
        queue.push(node!.right);
      }
  
      values.push(node!.value);
    }

    return values;
  }
}