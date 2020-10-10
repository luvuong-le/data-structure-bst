import Node from "@modules/Node";

export default interface IBinarySearchTree {
    root: Node;
    length: number;
    search(data): Node;
    add(data): void;
    insertNode(node, data): void;
    traverseInOrder(node): void;
    traversePostOrder(node): void;
    traversePreOrder(node): void;
}