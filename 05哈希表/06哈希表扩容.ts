/**
 * 步骤1：先将之前数组保存起来，因为我们待会儿会将storeage = []
 * 步骤2：之前的属性值需要重置。
 * 步骤3：遍历所有的数据项，重新插入到哈希表中。
 *
 * 装填因子大于0.75
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
   * 数组扩容
   * @param newLength
   */
  resize(newLength: number) {
    //设置新数组长度
    this.length = newLength;
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    oldStorage.forEach((bucket) => {
      if (!bucket) return;
      for (let i = 0; i < newLength; i++) {
        const oldBucket = bucket[i];
        this.put(oldBucket[0], oldBucket[1]);
      }
    });
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

      //进行数组的扩容, > 0.75
      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) {
        this.resize(this.length * 2);
      }
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

        //如果loadFactor小于0.24，缩容操作
        const loadFactor = this.count / this.length;
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }

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
