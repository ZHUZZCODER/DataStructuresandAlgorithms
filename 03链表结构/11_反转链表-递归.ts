import LinkedNode from "./LinkedNode";

function reversalLinkedNode<T>(
  head: LinkedNode<T> | null
): LinkedNode<T> | null {
  if (head === null || head.next === null) return head;
  const newHead = reversalLinkedNode(head.next ?? null);
  head.next.next = head;
  head.next = null;
  return newHead;
}

const node = new LinkedNode<number>(1);
node.next = new LinkedNode<number>(2);
node.next.next = new LinkedNode<number>(3);
console.log(node?.value, node?.next?.value, node?.next?.next?.value);
const newNode = reversalLinkedNode(node);
console.log(newNode?.value, newNode?.next?.value, newNode?.next?.next?.value);

export {};
