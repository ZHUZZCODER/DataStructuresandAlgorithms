import { ILinkedList } from "./ILinkedList";
import { ListNode } from "./ILinkedNode";

//实现单向循环列表
export class LinkedList<T> implements ILinkedList<T> {
  //头部节点
  protected head: ListNode<T> | null = null;
  //链表长度
  protected size: number = 0;
  //尾部节点
  protected tail: ListNode<T> | null = null;

  get length() {
    return this.size;
  }

  protected getNode(position: number): ListNode<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
  }

  /***判断是否是最后一个节点 */
  private isTail(node: ListNode<T>) {
    return this.tail === node;
  }

  //在链表尾部添加
  append(value: T): void {
    const newNode = new ListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      // let current: ListNode<T> = this.head;
      // while (current.next) {
      //   current = current.next;
      // }
      // current.next = newNode;
      //***如果不是头部节点说明后面还有节点
      this.tail!.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  //向链表的特定位置插入一个新的项。
  insert(position: number, value: T): boolean {
    if (position < 0 || position > this.size) return false;
    const newNode = new ListNode<T>(value);
    if (position === 0) {
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head.next;
        this.head = newNode.next;
      }
    } else {
      //   let index = 0;
      //   let current: ListNode<T> | null = this.head!;
      //   let pervious: ListNode<T> | null = null;
      //   while (index++ < position && current) {
      //     pervious = current;
      //     current = current.next;
      //   }
      let pervious = this.getNode(position - 1);
      newNode.next = pervious!.next;
      pervious!.next = newNode;
    }

    //***如果是最后一个节点
    if (position === this.length - 1) {
      this.tail = newNode;
    }

    this.size++;

    return true;
  }

  //移除节点
  remove(value: T): T | null {
    let position = this.indexOf(value);
    return this.removeAt(position);
  }

  traverse(): void {
    let list: T[] = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      // current = current.next;
      /***如果是最后一个节点了，直接设置为null */
      if (this.isTail(current)) {
        current = null;
      } else {
        current = current.next;
      }
    }
    /***循环列表结构 */
    if (this.head && this.tail?.next === this.head) {
      list.push(this.head.value);
    }
    console.log(list.join("->"));
  }

  //从链表的特定位置移除一项
  removeAt(position: number): T | null {
    if (position < 0 || position > this.size) return null;
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
      //***如果只有一个节点设置为null */
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      const node = this.getNode(position - 1);
      current = node?.next ?? null;
      node!.next = node?.next?.next ?? null;
      //***如果是尾部移除 */
      if (position === this.length - 1) {
        this.tail = node;
      }
    }
    this.size--;
    return current?.value ?? null;
  }

  //获取对应位置元素
  get(position: number): T | null {
    if (position < 0 || position > this.length) return null;
    if (position === 0) {
      return this.head?.value ?? null;
    } else {
      //   let index = 0;
      //   let current: ListNode<T> | null = this.head;
      //   while (index++ < position && current) {
      //     current = current.next;
      //   }
      let current = this.getNode(position);
      return current?.value ?? null;
    }
  }

  //返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (index++ < this.size && current) {
      if (current.value === value) return index;
      // current = current.next;
      //***如果是最后一个节点，将current设置为null */
      if (this.isTail(current)) {
        current = null;
      } else {
        current = current.next;
      }
    }
    return -1;
  }

  //修改某个位置的元素
  update(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false;
    const node = this.getNode(position);
    node!.value = value;
    return true;
  }

  // 判读单链表是否为空的方法
  isEmpty() {
    return this.size === 0;
  }
}
