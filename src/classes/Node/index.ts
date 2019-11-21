export default class Node {
  value: string | number;
  next: Node | null;

  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }
}
