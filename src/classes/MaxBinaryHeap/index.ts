import { ValueType } from '../../types';

export default class MaxBinaryHeap {
  values: ValueType[];

  constructor() {
    this.values = [];
  }

  insert(value: ValueType) {
    this.values.push(value);
    let index = this.values.length - 1;
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[parentIndex]) {
        break;
      }

      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax(): ValueType | undefined {
    const returnValue = this.values[0];
    const end = this.values.pop();
    
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }

    return returnValue;
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

      if (leftChild && leftChild > element) {
        swapIndex = leftChildIndex;
      }

      if ((rightChild && rightChild > element) && swapIndex === null ||
        leftChild && (rightChild && rightChild > leftChild)) {
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
