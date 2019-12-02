import Queue from '../';

describe('====QUEUE====', () => {
  test('Can create an empty Queue', () => {
    const queue = new Queue();

    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
    expect(queue.size).toBe(0);
  });

  test('Can add node to empty queue', () => {
    const queue = new Queue();

    queue.enqueue(3);

    expect(queue.first!.value).toBe(3);
    expect(queue.last!.value).toBe(3);
    expect(queue.size).toBe(1);
  });

  test('Can add node to queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.first!.value).toBe(1);
    expect(queue.first!.next!.value).toBe(2);
    expect(queue.last!.value).toBe(3);
    expect(queue.size).toBe(3);
  });

  test('Can remove node from queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const dequeued = queue.dequeue();

    expect(dequeued).toBe(1);
    expect(queue.first!.value).toBe(2);
    expect(queue.first!.next!.value).toBe(3);
    expect(queue.last!.value).toBe(3);
    expect(queue.size).toBe(2);
  });

  test('Can remove the last node from queue', () => {
    const queue = new Queue();

    queue.enqueue(1);

    const dequeued = queue.dequeue();

    expect(dequeued).toBe(1);
    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
    expect(queue.size).toBe(0);
  });

  test('Return null if queue is empty: dequeue', () => {
    const queue = new Queue();
    const dequeued = queue.dequeue();

    expect(dequeued).toBe(null);
    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);
    expect(queue.size).toBe(0);
  });
});