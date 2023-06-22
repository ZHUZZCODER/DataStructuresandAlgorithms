/**
 * 步骤1：根据传入的key获取对应的hashCode，也就是数组的index
 * 步骤2：从哈希表的index位置中取出桶(另外一个数组)
 * 步骤3：查看上一步的bucket是否为null
 *  为null，表示之前在该位置没有放置过任何的内容，那么就新建一个数组[]
 * 步骤4：查看是否之前已经放置过key对应的value
 *  如果放置过，那么就是依次替换操作，而不是插入新的数据。
 *  我们使用一个变量override来记录是否是修改操作
 * 步骤5：如果不是修改操作，那么插入新的数据。
 *  在bucket中push新的[key，value]即可。
 *  注意：这里需要将count+1，因为数据增加了一项。
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
}

const hashTable = new HashTable();

hashTable.put("qqq", 112);
hashTable.put("www", 234);
hashTable.put("ppp", 97);
export {};
