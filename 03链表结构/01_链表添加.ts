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
}

const linkedList = new LinkedList<string>();

linkedList.append("123");
linkedList.append("456");
linkedList.append("789");
linkedList.traverse();

export {};
