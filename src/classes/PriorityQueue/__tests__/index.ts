import PriorityQueue from '../';

describe('====PRIORITY QUEUE====', () => {
  test('Removes lowest first', () => {
    const ER = new PriorityQueue();
    ER.enqueue('common cold', 5);
    ER.enqueue('gunshot wound', 1);
    ER.enqueue('high fever', 4);
    ER.enqueue('broken arm', 2);
    ER.enqueue('glass in foot', 3);

    const firstPriority = ER.dequeue();

    expect(firstPriority).toBe('gunshot wound');
  });
});
