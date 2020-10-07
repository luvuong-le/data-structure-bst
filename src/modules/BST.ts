import IBinarySearchTree from "@interfaces/IBinarySearchTree";
import INode from "@interfaces/INode";
import Node from "@modules/Node";

export default class BST implements IBinarySearchTree {
    root: INode;

    constructor() {
        this.root = null;
    }

    add(data): void {
        // Set the node to the root
        const node = this.root;

        // If root is null, then add the new node as the root 
        if (!node) {
            this.root = new Node(data)
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
                return;
            } else {
                return this.insertNode(node.left, data);
            }
        } else if (data > node.data) {
            // right  empty = right is the new node
            if (!node.right) {
                node.right = new Node(data);
                return;
            } else {
                return this.insertNode(node.right, data);
            }
        } else { return null; }
    }

    traverseInOrder(root: Node) {
        if (!root) {
            console.log("BST is empty");
            return 'BST is empty'
        } else {
            this.traverseInOrder(root.left);
            console.log(root.data)
            this.traverseInOrder(root.right);
        }
    }
}