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

  delete(key: string): T | undefined {
    let index = this.hashFn(key, this.length);
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
        bucket.splice(i, 1);
        this.count--;
        return bucketKey as T;
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
