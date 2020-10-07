import Node from "@modules/Node";

export default interface IBinarySearchTree {
    root: Node;
    add(data): void;
    insertNode(node, data): void;
}