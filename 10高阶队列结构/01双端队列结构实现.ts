import Queue from "../02队列结构/queue";

class Deque<T> extends Queue<T> {
  addFront(value: T) {
    this.queue.unshift(value);
  }

  removeBack(): T | undefined {
    return this.queue.pop()!;
  }
}

const deque = new Deque<string>();
deque.enqueue("11");
deque.enqueue("33");
deque.enqueue("22");
deque.enqueue("66");
deque.enqueue("99");
deque.enqueue("44");
while (!deque.isEmpty()) {
  console.log(deque.removeBack());
}

export {};
