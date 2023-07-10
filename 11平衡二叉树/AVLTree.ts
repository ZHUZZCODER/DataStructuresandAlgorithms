import TreeNode from "./BsTree";

class AVLTree<T> extends TreeNode<T> {
  left: AVLTree<T> | null = null;
  right: AVLTree<T> | null = null;
  parent: AVLTree<T> | null = null;

  //是否平衡
  isBlance(): boolean {
    const blanceValue = this.getBlance();
    return blanceValue >= -1 && blanceValue <= 1;
  }

  //平衡因子(高度差)： left - right = 1 / -1 / 0
  getBlance(): number {
    let leftHeight = this.left ? this.left.getHeight() : 0;
    let rightHeight = this.right ? this.right.getHeight() : 0;
    return leftHeight - rightHeight;
  }

  //获取树节点高度
  private getHeight() {
    let leftNode = this.left ? this.left.getHeight() : 0;
    let rightNode = this.right ? this.right.getHeight() : 0;
    return Math.max(leftNode, rightNode) + 1;
  }
}
