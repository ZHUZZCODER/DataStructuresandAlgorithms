import Queue from "./queue";

/**
 * 题目：击鼓传花
 *  一群人围成一群，数1，2，3，重复，数到3的人淘汰
 */

function Game(list: number[], count: number) {
  const arryQueue = new Queue<number>();
  for (const item of list) {
    arryQueue.enqueue(item);
  }
  let index = 1;
  while (arryQueue.size() > 1) {
    for (let i = 1; i < count; i++) {
      const item = arryQueue.dequeue() as number;
      arryQueue.enqueue(item);
    }
    arryQueue.dequeue();
  }
  return arryQueue.dequeue();
}

console.log(Game([1, 3, 4, 32, 2, 3, 3], 3));
