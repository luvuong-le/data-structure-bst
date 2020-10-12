import IBinarySearchTree from "@interfaces/IBinarySearchTree";
import INode from "@interfaces/INode";
import Node from "@modules/Node";

export default class BST implements IBinarySearchTree {
  root: INode;
  length: number;

  constructor() {
    this.root = null;
    this.length = 0;
  }

  size(): Number {
    return this.length;
  }

  search(data): Node {
    let current: Node = this.root;
    while (current.data !== data) {
      if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return current;
  }

  add(data): void {
    // Set the node to the root
    const node = this.root;

    // If root is null, then add the new node as the root
    if (!node) {
      this.root = new Node(data);
      this.length++;
      return;
    } else {
      return this.insertNode(this.root, data);
    }
  }

  insertNode(node: Node, data: string): void {
    // Check left or right
    if (data < node.data) {
      // left empty = left is the new node
      if (!node.left) {
        node.left = new Node(data);
        this.length++;
        return;
      } else {
        return this.insertNode(node.left, data);
      }
    } else if (data > node.data) {
      // right  empty = right is the new node
      if (!node.right) {
        node.right = new Node(data);
        this.length++;
        return;
      } else {
        return this.insertNode(node.right, data);
      }
    } else {
      return;
    }
  }

  traverseInOrder(root: Node) {
    if (!root) {
      return 'BST is empty';
    } else {
      this.traverseInOrder(root.left);
      console.log(root.data);
      this.traverseInOrder(root.right);
    }
  }

  traversePreOrder(root: Node) {
    if (!root) return;

    console.log(root.data);
    this.traversePostOrder(root.left);
    this.traversePostOrder(root.right);
  }

  traversePostOrder(root: Node) {
    if (!root) return;

    this.traversePostOrder(root.left);
    this.traversePostOrder(root.right);
    console.log(root.data);
  }
}
