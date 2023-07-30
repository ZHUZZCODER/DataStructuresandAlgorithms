/**
 * 快速排序，先在数组中找到一个基准，添加两个指针，i和j，左边的指针指向大于等于基准的值，右边的指针指向小于等于基准的值，i和j指针的元素交换位置
 * @param arr
 * @returns
 */
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  handleQuickSort(0, arr.length - 1);
  function handleQuickSort(left: number, right: number) {
    if (left >= right) return;
    let standard = arr[right];
    let i = left;
    let j = right - 1;
    while (i <= j) {
      //找到左边比基准大的
      while (arr[i] < standard) {
        i++;
      }
      //找到右边比基准小的
      while (arr[j] > standard) {
        j--;
      }
      //如果i小于j则交换位置
      if (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        //继续执行
        i++;
        j--;
      }
    }
    //当i>j时，交换位置i和基准位置
    let temp = arr[i];
    arr[i] = arr[right];
    arr[right] = temp;

    //左侧递归
    handleQuickSort(left, j);
    //右侧递归
    handleQuickSort(i + 1, right);
  }
  return arr;
}

console.log(quickSort([20, 2, 9, 7, 12, 15, 1, 6, 8]));

// 6 2 1 7 8 15 9 20 12
// 6 2 1 7 8 9 15 12 20
// 1 2 6 7 8 9 12 15 20
// 1 2 6 7 8 9 12 15 20

export {};
