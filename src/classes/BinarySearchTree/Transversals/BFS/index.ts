import BinarySearchTree from '../../';
import { ValueType } from '../../../../types';

export default function breadthFirstSearch(list: BinarySearchTree): ValueType[] {
  let queue = [];
  let values = [];

  queue.push(list.root);

  while(queue.length > 0) {
    const node = queue.shift();

    if (node!.left !== null) {
      queue.push(node!.left);
    }

    if (node!.right !== null) {
      queue.push(node!.right);
    }

    values.push(node!.value);
  }

  return values;
}