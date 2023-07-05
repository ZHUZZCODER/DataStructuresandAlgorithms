export interface ILinkedList<T> {
  //添加节点
  append(value: T): void;
  //删除节点
  remove(value: T): T | null;
  //插入节点
  insert(position: number, value: T): boolean;
  //遍历节点
  traverse(): void;
  //根据位置移除节点
  removeAt(position: number): T | null;
  //获取指定位置
  get(position: number): T | null;
  //返回节点位置
  indexOf(value: T): number;
  //更新节点
  update(value: T, position: number): boolean;
}
