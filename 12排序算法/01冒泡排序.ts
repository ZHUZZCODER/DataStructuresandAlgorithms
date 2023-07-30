import { testSort, swap, measureSort } from "hy-algokit";
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let isSort = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSort = true;
      }
    }
    //如果已经时有序则不需要排序
    if (!isSort) break;
  }
  return arr;
}

console.log(bubbleSort([3, 10, 8, 11, 3, 12]));
//测试排序算法, 算法复杂度On平方，n轮，n次
measureSort(bubbleSort, 100000);
