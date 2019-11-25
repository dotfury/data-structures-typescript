type ValueType = string | number;
type NodeType = Node | null;

export default class Node {
  value: ValueType;
  next: NodeType;
  previous: NodeType;

  constructor(value: ValueType) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
