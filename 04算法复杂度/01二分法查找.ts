function divisionQuery<T>(list: T[], num: T) {
  let start = 0;
  let end = list.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let val = list[mid];
    if (val === num) {
      return mid;
    } else if (val < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(
  divisionQuery<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13)
);

export {};
