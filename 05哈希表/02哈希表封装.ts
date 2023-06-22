/**
 * 哈希表需要定义三个属性：
 * storage作为我们的数组，数组中存放相关的元素。
 * count表示当前已经存在了多少数据。
 * limit用于标记数组中一共可以存放多少个元素。
 */
class HashTable<T = unknown> {
  private storage: [string, T][] = [];
  private count: number = 0;
  private limit: number = 0;
}

const hashTable = new HashTable();

export {};
