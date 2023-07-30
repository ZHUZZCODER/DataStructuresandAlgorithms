/**
 * 归并排序核心思想，先将数组拆分，再排序合并，通过i和j的指针
 * 时间复杂度O(nlogn)
 * @param arr
 * @returns
 */
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  //1.拆分数组
  const n = arr.length;
  const splitIndex = Math.floor(n / 2);
  const leftArr = arr.slice(0, splitIndex);
  const rightArr = arr.slice(splitIndex);
  //2.对子数组进行拆分和排序
  const leftSortArr = mergeSort(leftArr);
  const rightSortArr = mergeSort(rightArr);
  //3.合并,排序(两个指针)
  let i = 0;
  let j = 0;
  let result: number[] = [];
  while (i < leftSortArr.length && j < rightSortArr.length) {
    if (leftSortArr[i] <= rightSortArr[j]) {
      result.push(leftSortArr[i]);
      i++;
    } else {
      result.push(rightSortArr[j]);
      j++;
    }
  }
  //左边数组比右边大，或右边比左边大情况
  if (i < rightSortArr.length) {
    result.push(...leftSortArr.slice(i));
  }

  if (j < rightSortArr.length) {
    result.push(...rightSortArr.slice(j));
  }
  return result;
}

console.log(mergeSort([30, 10, 8, 11, 3, 12]));

export {};
