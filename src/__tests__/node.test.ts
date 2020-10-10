import Node from "@modules/Node";

let node: Node;

beforeAll(done => {
    node = new Node(10);
    done();
});

describe("Node Data Class", () => {
    it("should instantiate a Node", () => {
        expect(node instanceof Node).toBe(true);
    });

    it("should be created with a value", () => {
        expect(node.data).toBe(10);
    });
})