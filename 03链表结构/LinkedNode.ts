class LinkedNode<T> {
  value: T | null;
  next: LinkedNode<T> | null;
  constructor(value?: T, next?: LinkedNode<T>) {
    this.value = value === undefined ? null : value;
    this.next = next === undefined ? null : next;
  }
}

export default LinkedNode;
