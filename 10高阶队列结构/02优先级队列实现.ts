import Heap from "../09堆结构heap/01堆结构封装";
class PriorityNode<T> {
  priority: number;
  value: T;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
  valueOf() {
    return this.priority;
  }
}
class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap([]);

  //入队
  enqueue(value: T, priority: number) {
    const priorityNode = new PriorityNode<T>(value, priority);
    this.heap.insert(priorityNode);
  }

  //出队
  dequeue(): T | undefined {
    return this.heap.extract()?.value;
  }

  peek(): T | undefined {
    return this.heap.peek()?.value;
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  size() {
    return this.heap.size;
  }
}

const priorityQueue = new PriorityQueue<string>();
priorityQueue.enqueue("123", 12);
priorityQueue.enqueue("456", 1);
priorityQueue.enqueue("789", 5);
while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.dequeue());
}

export {};
