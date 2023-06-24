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
  //保存父节点
  parent: TreeNode<T> | null = null;
  //判断是否是左子节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this);
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }
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

  /***
   * 先序遍历：
   *  遍历过程为：
   *  ①访问根节点；
   *  ②先序遍历其左子树；
   *  ③先序遍历其右子树。
   */
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log("preOrder=", node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  /***
   * 先序遍历（非递归）
   */
  preOrderTraverseTwo() {
    const stack: TreeNode<T>[] = [];
    let current: TreeNode<T> | null = this.root;
    while (current !== null || !stack.length) {
      while (current !== null) {
        console.log(current.value);
        //入栈
        stack.push(current);
        current = current.left;
      }
      //遍历右子节点
      current = stack.pop()!;
      current = current.right;
    }
  }

  /**
   * 中序遍历：
   *  ①中序遍历其左子树；
   *  ②访问根节点；
   *  ③中序遍历其右子树。
   */
  inOrderTraverse() {
    this.inOderTraverseNode(this.root);
  }
  private inOderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOderTraverseNode(node.left);
      console.log(node.value);
      this.inOderTraverseNode(node.right);
    }
  }
  //中序遍历（非递归）
  inOrderTraverseNonRecursive() {
    let stack: TreeNode<T>[] = [];
    let current: TreeNode<T> | null = this.root;
    while (current !== null || !stack.length) {
      while (current !== null) {
        //栈先进后出
        stack.push(current);
        current = current.left;
      }
      current = stack.pop()!;
      console.log(current.value);
      current = current.right;
    }
  }

  /**
   * 后序遍历:
   *  ①后序遍历其左子树；
   *  ②后序遍历其右子树；
   *  ③访问根节点。
   */
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }

  /**
   * 层序遍历：
   *  层序遍历很好理解，就是从上向下逐层遍历。
   *  层序遍历通常我们会借助于队列来完成；
   *   ✓ 也是队列的一个经典应用场景；
   */
  levelOrderTraversal() {
    //如果没有根节点return
    if (!this.root) return;

    let stack: TreeNode<T>[] = [];
    stack.push(this.root);
    while (stack.length) {
      let current = stack.shift()!;
      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
  }

  //最大值
  getMaxValue(): T | null {
    if (!this.root) return this.root;
    let current: TreeNode<T> = this.root;
    while (current && current.right) {
      current = current.right;
    }
    return current.value ?? null;
  }

  //最小值
  getMinValue(): T | null {
    if (!this.root) return this.root;
    let current: TreeNode<T> = this.root;
    while (current && current.left) {
      current = current.left;
    }
    return current.value ?? null;
  }

  //搜索节点
  //小于查左边，大于查右边
  search(value: T): boolean {
    if (!this.root) return false;
    let current: TreeNode<T> | null = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      } else if (current.value < value) {
        current = current.right;
      } else if (current.value > value) {
        current = current.left;
      }
    }
    return false;
  }

  //删除节点
  remove(value: T): boolean {
    //搜索节点
    const current = this.searchNode(value);
    if (!current) return false;
    /***删除：
     * 情况一没有子节点
     */
    if (current.left === null && current.right === null) {
      //如果节点就是根节点
      if (current === this.root) {
        this.root = null;
      } else if (current.isRight) {
        current.parent!.right = null;
      } else {
        current.parent!.left = null;
      }
    } else if (current.left === null) {
      /***删除：
       * 情况二只有一个子节点 (将自己的儿子指向父亲)
       */
      if (current === this.root) {
        this.root = current.left;
      } else if (current.isRight) {
        current.parent!.right = current.left;
      } else {
        current.parent!.left = current.left;
      }
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (current.isRight) {
        current.parent!.right = current.right;
      } else {
        current.parent!.left = current.right;
      }
    }
    /***删除：
     * 情况三：两个子节点
     */
    return true;
  }

  //搜索节点
  private searchNode(value: T): TreeNode<T> | null {
    if (!this.root) return null;
    let current: TreeNode<T> | null = this.root;
    let parent: TreeNode<T> | null = null;
    while (current) {
      if (current.value === value) return current;
      //存储父节点
      parent = current;
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      }

      //记录父节点
      if (current) current.parent = parent;
    }

    return null;
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
// bst.preOrderTraverse();
bst.inOrderTraverse();
console.log(bst.search(5));
console.log(bst.search(55));
export {};
