import IQueue from "./IQueue";
/**
 * 队列遵循先进先出的原则，一端进入，另一端出
 */
class Queue<T> implements IQueue<T> {
  protected queue: T[] = [];
  /**
   * 入队
   * @param element
   */
  enqueue(element: T): void {
    this.queue.push(element);
  }
  /**
   * 出队
   * @returns
   */
  dequeue(): T | undefined {
    return this.queue.shift();
  }
  peek(): T {
    return this.queue[this.queue.length - 1];
  }
  isEmpty(): boolean {
    return this.queue.length === 0;
  }
  size(): number {
    return this.queue.length;
  }
}

export default Queue;
