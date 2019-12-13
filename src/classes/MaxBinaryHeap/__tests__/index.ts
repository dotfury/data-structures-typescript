import MaxBinaryHeap from '../';

describe('====MAX BINARY HEAP====', () => {
  test('Can create an empty heap', () => {
    const heap = new MaxBinaryHeap();

    expect(heap.values.length).toBe(0);
  });

  test('Can insert to empty heap', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(5);

    expect(heap.values.length).toBe(1);
    expect(heap.values[0]).toBe(5);
  });

  test('Can insert to smaller value', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(5);
    heap.insert(3);

    const childIndex = heap.values.length - 1;
    const parentIndex = Math.floor((childIndex - 1) / 2);

    expect(heap.values.length).toBe(2);
    expect(heap.values[childIndex]).toBe(3);
    expect(heap.values[parentIndex]).toBe(5);
  });

  test('Can insert to larger value', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(5);
    heap.insert(3);
    heap.insert(7);

    expect(heap.values.length).toBe(3);
    expect(heap.values[0]).toBe(7);
  });
});