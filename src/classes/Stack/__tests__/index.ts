import Stack from '../';

describe('====STACK====', () => {
  test('Can create an empty stack', () => {
    const stack = new Stack();

    expect(stack.first).toBe(null);
    expect(stack.last).toBe(null);
    expect(stack.size).toBe(0);
  });
});