/**
 * ◼ 代码解析：
 *  封装BSTree的类；
 *   还需要封装一个用于保存每一个节点的类Node。
 *   该类包含三个属性：节点对应的value，指向的左子树left，指向的右子树right
 *   对于BSTree来说，只需要保存根节点即可，因为其他节点都可以通过根节点找到。
 */
class Node<T> {
  value: T | null;
  constructor(value: T) {
    this.value = value;
  }
}

class TreeNode<T> extends Node<T> {
  leftNode: T | null;
  rightNode: T | null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;
}
export {};
