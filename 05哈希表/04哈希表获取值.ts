/**
 * 步骤1：根据key获取hashCode(也就是index)
 * 步骤2：根据index取出bucket。
 * 步骤3：因为如果bucket都是null，那么说明这个位置之前并没有插入过数据。
 * 步骤4：有了bucket，就遍历，并且如果找到，就将对应的value返回即可。
 * 步骤5：没有找到，返回null
 */
class HashTable<T = unknown> {
  private storage: [string, T][][] = [];
  private count: number = 7;
  private length: number = 0;

  hashFn(key: string, num: number): number {
    let hashCode = 0;
    let keyLength = key.length;
    for (let i = 0; i < keyLength; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i);
    }
    //下标值的结果：index = largeNumber % smallRange;
    return hashCode % num;
  }

  /**
   * 插入修改
   * @param key
   * @param value
   */
  put(key: string, value: T) {
    //获取index
    const index = this.hashFn(key, this.length);
    //取出桶,没有值,创建一个
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
    //如果存在值就修改,不存在就新增
    let bucketLength = bucket.length;
    let status = false;
    for (let i = 0; i < bucketLength; i++) {
      const bucketVal = bucket[i];
      const bucketKey = bucketVal[0];
      if (bucketKey === key) {
        bucketVal[1] = value;
        status = true;
      }
    }
    if (!status) {
      bucket.push([key, value]);
      this.count++;
    }
  }

  get(key: string): T | undefined {
    const index = this.hashFn(key, this.length);
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
    let bucketLength = bucket.length;
    for (let i = 0; i < bucketLength; i++) {
      const bucketVal = bucket[i];
      const bucketKey = bucketVal[0];
      if (bucketKey === key) {
        return bucketVal[1];
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable();

hashTable.put("qqq", 112);
hashTable.put("www", 234);
hashTable.put("ppp", 97);
export {};
