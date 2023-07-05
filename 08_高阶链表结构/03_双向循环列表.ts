import { LinkedList } from "./01_实现LinkedList封装";
import { DoubleListNode, ListNode } from "./ILinkedNode";

class DoublyList<T> extends LinkedList<T> {
  protected head: DoubleListNode<T> | null = null;
  protected tail: DoubleListNode<T> | null = null;

  append(value: T): void {
    const node = new DoubleListNode<T>(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.pre = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value: T): void {
    const node = new DoubleListNode<T>(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.pre = node;
      node.next = this.head;
      this.head = node;
    }
  }

  //反向遍历
  postTraverse() {
    const values: T[] = [];
    let current = this.tail;
    while (current) {
      values.push(current.value);
      current = current.pre;
    }
    console.log(values.join("->"));
  }

  //根据索引插入
  insert(position: number, value: T): boolean {
    if (position < 0 || position === this.length - 1) return false;

    if (position === 0) {
      //前面插入
      this.prepend(value);
    } else if (position === this.length - 1) {
      //后面插入
      this.append(value);
    } else {
      //中间插入
      const node = new DoubleListNode<T>(value);
      const current = this.getNode(position) as DoubleListNode<T>;
      current.pre!.next = node;
      node.pre = current.pre;
      node.next = current;
      current.pre = node;
      this.size++;
    }

    return true;
  }

  removeAt(position: number): T | null {
    if (position < 0 || position < this.length - 1) return null;
    let current = this.head;
    if (position === 0) {
      //如果只有一个元素
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head?.next ?? null;
        this.head!.pre = null;
      }
    } else if (this.length === position) {
      //如果是最后一个元素
      current = this.tail;
      this.tail = this.tail!.pre;
      this.tail!.next = null;
    } else {
      current = this.getNode(position) as DoubleListNode<T>;
      current.next!.pre = current.pre;
      current.pre!.next = current.next;
    }
    this.size--;
    return current?.value ?? null;
  }
}
