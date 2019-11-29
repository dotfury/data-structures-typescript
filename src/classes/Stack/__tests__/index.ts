import Stack from '../';

describe('====STACK====', () => {
  test('Can create an empty stack', () => {
    const stack = new Stack();

    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
    expect(stack.size).toBe(0);
  });

  test('Can push node to empty list', () => {
    const stack = new Stack();

    stack.push(3);

    expect(stack.first!.value).toBe(3);
    expect(stack.last!.value).toBe(3);
    expect(stack.size).toBe(1);
  });

  test('Can push node to list', () => {
    const stack = new Stack();

    stack.push(3);
    stack.push(2);
    stack.push(1);

    expect(stack.first!.value).toBe(1);
    expect(stack.first!.next!.value).toBe(2);
    expect(stack.last!.value).toBe(3);
    expect(stack.size).toBe(3);
  });

  test('Can pop node off the list', () => {
    const stack = new Stack();

    stack.push(3);
    stack.push(2);
    stack.push(1);

    const popped = stack.pop();

    expect(popped).toBe(1);
    expect(stack.first!.value).toBe(2);
    expect(stack.last!.value).toBe(3);
    expect(stack.size).toBe(2);
  });

  test('Can pop last node off the list', () => {
    const stack = new Stack();

    stack.push(1);

    const popped = stack.pop();

    expect(popped).toBe(1);
    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
    expect(stack.size).toBe(0);
  });

  test('Return null is empty list: pop', () => {
    const stack = new Stack();

    const popped = stack.pop();

    expect(popped).toBe(null);
    expect(stack.size).toBe(0);
  });
});