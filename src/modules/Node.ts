import INode from "@interfaces/INode";

export default class Node implements INode {
    data: string;
    left: INode;
    right: INode;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}