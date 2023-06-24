/**
 * 插入节点：
 *  1.如果根节点为空插入根节点
 *  2.如果节点大于根节点，找根节点的右侧为null的位置插入
 *  3.如果节点小于根节点，找根节点的左侧为null的位置插入
 */
import { btPrint } from "hy-algokit";
class Node<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;

  print() {
    btPrint(this.root);
  }

  //插入节点
  insert(value: T) {
    //创建节点
    const newNode = new TreeNode(value);
    //判断根节点是否为null
    if (!this.root) {
      this.root = newNode;
    } else {
      //如果不为null
      this.insetNode(this.root, newNode);
    }
  }

  //插入节点
  private insetNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    //判断是否大于节点
    if (newNode.value < node.value) {
      //小于节点左侧插入
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insetNode(node.left, newNode);
      }
    } else {
      //大于右侧插入
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insetNode(node.right, newNode);
      }
    }
  }
}

const bst = new BSTree<number>();
bst.insert(11);
bst.insert(3);
bst.insert(12);
bst.insert(20);
bst.insert(30);
bst.insert(23);
bst.insert(5);
bst.print();
export {};
