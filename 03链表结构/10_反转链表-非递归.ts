import LinkedNode from "./LinkedNode";

function reversalLinkedNode<T>(head: LinkedNode<T> | null) {
  if (head === null || head.next === null) return head;

  let newHead: LinkedNode<T> | null = null;
  while (head) {
    let current: LinkedNode<T> | null = head.next;
    head.next = newHead;
    newHead = head;
    head = current;
  }

  return newHead;
}

const node = new LinkedNode<number>(1);
node.next = new LinkedNode<number>(2);
node.next.next = new LinkedNode<number>(3);
console.log(node?.value, node?.next?.value, node?.next?.next?.value);
const newNode = reversalLinkedNode(node);
console.log(newNode?.value, newNode?.next?.value, newNode?.next?.next?.value);

export {};
