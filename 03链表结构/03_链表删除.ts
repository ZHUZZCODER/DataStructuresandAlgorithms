/**
 * 链表节点
 */
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  /**
   * 添加链表，在链表末尾
   * @param value
   */
  append(value: T) {
    const node = new Node<T>(value);
    if (!this.head) {
      this.head = node;
    } else {
      //如果next存在说明还有值
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      //不存在，则到了链表末尾
      current.next = node;
    }
    this.size++;
  }

  /**
   * 链表长度
   */
  get length() {
    return this.size;
  }

  /**
   * 遍历链表
   */
  traverse() {
    if (!this.head) return;
    const values: T[] = [];
    let current: Node<T> | null = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }

  /**
   * 链表插入，指定位置
   * @param value
   * @param position
   */
  insert(value: T, position: number) {
    if (position < 0 || position > this.size) return false;
    const node = new Node<T>(value);
    let previous: Node<T> | null = null;
    let current = this.head;
    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous!.next = node;
    }
    this.size++;
    return true;
  }

  /**
   * 链表删除
   * @param position
   */
  removeAt(position: number): T | null {
    if (position < 0 || position > this.size) return null;
    let current = this.head;
    //如果是第一个节点
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      previous!.next = current?.next ?? null;
    }
    this.size--;
    return current?.value ?? null;
  }
}

const linkedList = new LinkedList<string>();

linkedList.append("123");
linkedList.append("456");
linkedList.append("789");
linkedList.insert("345", 1);
linkedList.traverse();
linkedList.removeAt(1);
linkedList.traverse();

export {};
