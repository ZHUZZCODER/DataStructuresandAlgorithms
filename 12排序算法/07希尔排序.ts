function shellSort(arr: number[]): number[] {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    //一个个数往前算间隔对比
    for (let i = gap; i < n; i++) {
      let j = i;
      let temp = arr[i];
      //如果后面数比前面小交换,小的数字放后面
      while (j > gap - 1 && temp < arr[j - gap]) {
        arr[j] = arr[j - gap];
        //继续向前找对比
        j = j - gap;
      }

      //前面位置数字，换成后面小的数字
      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }
  return arr;
}

console.log(shellSort([20, 2, 9, 7, 12, 15, 1, 6, 8]));

export {};
