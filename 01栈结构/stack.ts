/**
 * 什么是栈结构？
 *  栈结构是先进后出的
 *  包含push: 入栈
 *      pop: 出栈
 *      peek: 取出栈顶元素
 *      isEmpty: 栈是否为空
 *      size: 栈长度
 *
 * 与数组的区别
 *   数组的内存的是连续的，根据索引获取数据特别快，但是在数组前新增元素是，需要将整个数据内存索引向后移动，性能消耗大
 */
import IStack from "./IStack";
class Stack<T> implements IStack<T> {
  private stack: T[] = [];
  push(item: T): void {
    this.stack.push(item);
  }
  pop(): T | undefined {
    return this.stack.pop();
  }
  peek(): T {
    return this.stack[this.stack.length - 1];
  }
  isEmpty(): boolean {
    return this.stack.length === 0;
  }
  size(): number {
    return this.stack.length;
  }
}

export { Stack };
