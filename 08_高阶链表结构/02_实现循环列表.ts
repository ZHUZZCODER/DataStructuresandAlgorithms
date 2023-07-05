import { ILinkedList } from "./ILinkedList";
import { DoubleListNode } from "./ILinkedNode";
import { LinkedList } from "./01_实现LinkedList封装";

class DoublyList<T> extends LinkedList<T> {
  //在尾部追加元素
  append(value: T): void {
    super.append(value);
    //尾部节点指向头部节点
    this.tail!.next = this.head;
  }

  insert(position: number, value: T): boolean {
    //如果是最后面插入
    const status = super.insert(position, value);
    if (status && (position === 0 || position === this.length - 1)) {
      this.tail!.next = this.head;
    }
    return status;
  }

  removeAt(position: number): T | null {
    const node = super.removeAt(position);
    //如果是最后一个节点，指向头部节点
    if (position === this.length - 1 || position === 0) {
      this.tail!.next = this.head;
    }
    return node;
  }
}
