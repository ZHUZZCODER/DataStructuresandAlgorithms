/**
 * 类似打牌不断与前面有序元素比较
 * @param arr
 * @returns
 */
function insertSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let newNum = arr[i];
    let j = i - 1;
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = newNum;
  }
  return arr;
}

console.log(insertSort([30, 10, 8, 11, 3, 12]));
