type hashItem = string[];

export default class HashTable {
  keyMap: hashItem[][];

  constructor(size: number = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key: string): number {
    let total: number = 0;
    const WEIRD_PRIME: number = 31;
    
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char: string = key[i];
      const value: number = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: string): void {
    const hashValue = this._hash(key);

    if (!this.keyMap[hashValue]) {
      this.keyMap[hashValue] = [];
    }

    this.keyMap[hashValue].push([ key, value ]);
  }

  get(key: string): string | undefined {
    const hashValue = this._hash(key);

    if (this.keyMap[hashValue]) {
      for (let i = 0; i < this.keyMap[hashValue].length; i++) {
        if (this.keyMap[hashValue][i][0] === key) {
          return this.keyMap[hashValue][i][1];
        }
      }
    }

    return undefined;
  }

  keys(): string[] {
    const length = this.keyMap.length;
    let results: string[] = [];

    for (let i = 0; i < length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          results.push(this.keyMap[i][j][0]);
        }
      }
    }

    return results;
  }

  values(): string[] {
    const length = this.keyMap.length;
    let results: string[] = [];

    for (let i = 0; i < length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          results.push(this.keyMap[i][j][1]);
        }
      }
    }

    return results;
  }
}
