/**
 * 霍纳法则
 * @param key 哈希key
 * @param num hash长度
 */
function hashFn(key: string, num: number): number {
  let hashCode = 0;
  let keyLength = key.length;
  for (let i = 0; i < keyLength; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i);
  }
  //下标值的结果：index = largeNumber % smallRange;
  return hashCode % num;
}

console.log(hashFn("qwer", 7));

export {};
