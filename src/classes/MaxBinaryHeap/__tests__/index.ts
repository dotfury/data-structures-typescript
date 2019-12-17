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

  test('Can insert to larger value', () => {
    const heap = new MaxBinaryHeap();

    heap.values = [41, 39, 33, 18, 27, 12];

    heap.insert(55);

    expect(heap.values.length).toBe(7);
    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  test('Can extract max value', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);

    const removed = heap.extractMax();

    expect(heap.values.length).toBe(6);
    expect(removed).toBe(55);
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);

    const removedSecond = heap.extractMax();

    expect(heap.values.length).toBe(5);
    expect(removedSecond).toBe(41);
    expect(heap.values).toEqual([39, 27, 33, 18, 12]);
  });

  test('Can extract max value last item', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(41);

    const removed = heap.extractMax();
    const removedSecond = heap.extractMax();

    expect(heap.values.length).toBe(0);
    expect(removed).toBe(41);
    expect(removedSecond).toBe(undefined);
  });
});
