//初始化节点
export class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  constructor(val: T) {
    this.value = val;
  }
}
export class DoubleListNode<T> extends ListNode<T> {
  pre: DoubleListNode<T> | null = null;
  next: DoubleListNode<T> | null = null;
}
