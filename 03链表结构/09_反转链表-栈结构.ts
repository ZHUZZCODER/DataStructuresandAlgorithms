import LinkedNode from "./LinkedNode";

function reversalLinkedNode<T>(head: LinkedNode<T> | null) {
  if (head === null) return;
  let linkedList: LinkedNode<T>[] = [];
  let current: LinkedNode<T> | null = head;
  while (current) {
    linkedList.push(current);
    current = current.next;
  }
  const newhead: LinkedNode<T> = linkedList.pop()!;
  current = newhead;
  while (linkedList.length) {
    const node = linkedList.pop();
    current!.next = node ?? null;
    current = current?.next ?? null;
  }
  return newhead;
}

const node = new LinkedNode<number>(1);
node.next = new LinkedNode<number>(2);
node.next.next = new LinkedNode<number>(3);
console.log(node?.value, node?.next?.value, node?.next?.next?.value);
const newNode = reversalLinkedNode(node);
console.log(newNode?.value, newNode?.next?.value, newNode?.next?.next?.value);

export {};
