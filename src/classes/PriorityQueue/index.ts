type ValueType = string | number;

class Node {
  value: ValueType;
  priority: number;

  constructor(value: ValueType, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export default class PriorityQueue {
  values: Node[];

  constructor() {
    this.values = [];
  }

  enqueue(value: ValueType, priority: number) {
    const newNode = new Node(value, priority);

    this.values.push(newNode);
    let index = this.values.length - 1;
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index].priority >= this.values[parentIndex].priority) {
        break;
      }

      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue(): ValueType | undefined {
    const returnValue = this.values[0];
    const end = this.values.pop();
    
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }

    return returnValue.value;
  }

  sinkDown(): void {
    const length = this.values.length;
    let index = 0;

    while (true) {
      const leftChildIndex = (2 * index) + 1;
      const rightChildIndex = (2 * index) + 2;
      const leftChild = (leftChildIndex < length) ? this.values[leftChildIndex] : null;
      const rightChild = (rightChildIndex < length) ? this.values[rightChildIndex] : null;
      const element = this.values[index];
      let swapIndex = null;

      if (leftChild && leftChild.priority < element.priority) {
        swapIndex = leftChildIndex;
      }

      if ((rightChild && rightChild.priority < element.priority) && swapIndex === null ||
        leftChild && (rightChild && rightChild.priority < leftChild.priority)) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) {
        break;
      }

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}
