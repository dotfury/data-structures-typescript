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
      if (this.values[index] > this.values[parentIndex]) {
        [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];

        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
  }
}