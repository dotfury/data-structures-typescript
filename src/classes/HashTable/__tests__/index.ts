import HashTable from '../';

describe('====HASH TABLE====', () => {
  test('Can set and get', () => {
    const hashTable = new HashTable();

    hashTable.set('hello world', 'goodbye!!');
    hashTable.set('hello worldz', 'goodbyez!!');
    hashTable.set('cat', 'yay!!');
    hashTable.set('pizza', 'good!!');
    hashTable.set('sun', 'fun!!');
    hashTable.set('cheese', 'fun!!');

    const selected = hashTable.get('sun');

    expect(selected).toBe('fun!!');
  });

  test('Can get array of keys', () => {
    const hashTable = new HashTable();

    hashTable.set('hello world', 'goodbye!!');
    hashTable.set('hello worldz', 'goodbyez!!');
    hashTable.set('cat', 'yay!!');
    hashTable.set('pizza', 'good!!');
    hashTable.set('sun', 'fun!!');
    hashTable.set('cheese', 'fun!!');

    const keys = hashTable.keys();

    expect(Array.isArray(keys)).toBe(true);
    expect(keys.length).toBe(6);
  });

  test('Can get array of values', () => {
    const hashTable = new HashTable();

    hashTable.set('hello world', 'goodbye!!');
    hashTable.set('hello worldz', 'goodbyez!!');
    hashTable.set('cat', 'yay!!');
    hashTable.set('pizza', 'good!!');
    hashTable.set('sun', 'fun!!');
    hashTable.set('cheese', 'fun!!');

    const values = hashTable.values();

    expect(Array.isArray(values)).toBe(true);
    expect(values.length).toBe(6);
  });
});
