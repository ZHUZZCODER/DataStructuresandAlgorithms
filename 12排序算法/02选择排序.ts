/**
 * 选择排序核心思想：
 *   第一个元素当作最小值，与第一个元素之后的元素对比，找到最小的值
 * 复杂度On2
 * @param arr
 */
function selectSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectSort([3, 10, 8, 11, 3, 12]));
