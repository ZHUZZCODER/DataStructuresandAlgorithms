/**
 * 堆结构属性：
 *   data 存储堆中元素
 *   size 堆中当前元素的数量
 * 常见方法：
 *   inset
 *   extract
 *   peek
 *   isEmpty
 *   build_heap
 */
import { cbtPrint } from "hy-algokit";
class Heap<T> {
  data: T[] = [];
  size: number = 0;
  //判断最大堆或最小堆
  isMax: boolean;

  constructor(arr: T[], isMax = false) {
    this.isMax = isMax;
    this.buildHeap(arr);
  }

  compare(indexOne: number, indexTwo: number): boolean {
    if (this.isMax) {
      return this.data[indexOne] >= this.data[indexTwo];
    } else {
      return this.data[indexOne] <= this.data[indexTwo];
    }
  }

  //插入元素
  insert(value: T) {
    //先将插入元素放到最后
    this.data.push(value);
    this.size++;
    //然后进行上滤操作
    this.heapUpfiltration();
  }

  //进行上滤操作
  heapUpfiltration() {
    //当前节点索引
    let index = this.size - 1;
    while (index > 0) {
      //父级节点索引
      let parentIndex = Math.floor((index - 1) / 2);
      //如果当前节点的值小于父级节点跳出循环
      //   if (this.data[index] <= this.data[parentIndex]) {
      if (this.compare(index, parentIndex)) {
        break;
      }
      //如果大于，则交换位置
      this.swap(index, parentIndex);
      //继续进行上滤操作
      index = parentIndex;
    }
  }

  //交换节点位置
  swap(indexOne: number, indexTwo: number) {
    let temp = this.data[indexOne];
    this.data[indexOne] = this.data[indexTwo];
    this.data[indexTwo] = temp;
  }

  //删除最大值或最小值
  extract(): T | undefined {
    if (this.size === 0) return undefined;
    if (this.size === 1) {
      this.size--;
      return this.data.pop()!;
    }
    let deleteData = this.data[0];
    //将最后一个节点放到最前面
    this.data[0] = this.data.pop()!;
    this.heapDownfiltration();
    this.size--;
    //进行下滤操作
    return deleteData;
  }

  //找出左子节点或右子节点中最大的值
  heapDownfiltration(start = 0) {
    //节点索引
    let index = start;
    //判断是否有左子节点
    while (2 * index + 1 < this.size) {
      //左子节点
      let leftChildIndex = 2 * index + 1;
      //右子节点
      let rightChildIndex = leftChildIndex + 1;
      let largeIndex = leftChildIndex;
      //如果右子节点存在且大于左子节点
      if (
        rightChildIndex < this.size &&
        // this.data[leftChildIndex] < this.data[rightChildIndex]
        this.compare(leftChildIndex, rightChildIndex)
      ) {
        largeIndex = rightChildIndex;
      }

      //如果largeIndex的值，小于当前节点的值，交换
      //   if (this.data[index] >= this.data[largeIndex]) {
      if (this.compare(largeIndex, index)) {
        break;
      }

      this.swap(index, largeIndex);
      index = largeIndex;
    }
  }

  //取出第一个元素
  peek(): T | undefined {
    return this.data[0];
  }

  //是否为空
  isEmpty() {
    return this.size === 0;
  }

  //批量建堆
  buildHeap(arr: T[]) {
    this.data = arr;
    this.size = arr.length;
    //从叶子节点开始下滤
    const start = Math.floor((this.size - 1) / 2);
    for (let index = start; index >= 0; index--) {
      this.heapDownfiltration(index);
    }
  }

  print() {
    return cbtPrint(this.data);
  }
}

let list = [18, 20, 12, 33, 29, 40, 89];
//批量建堆
const heap = new Heap<number>(list);
//删除
console.log(heap.extract());
console.log(list);
console.log(heap.print());

export default Heap;
