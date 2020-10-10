import Node from '@modules/Node';
import BST from "@modules/BST";

let bst: BST;

beforeAll((done) => {
    bst = new BST();
    done();
})

describe("Binary Search Tree", () => {
    it("should instantiate an instance of BST", () => {
        expect(bst instanceof BST).toBe(true);
    });

    it("should add a new node", () => {
        bst.add(5);
        expect(bst.size()).toBeGreaterThan(0);
    });

    it("should search for a node", () => {
        bst.add(5);
        const nodeSearch = bst.search(5);

        expect(nodeSearch instanceof Node).toBe(true);
        expect(nodeSearch.data).toBe(5);
    });

    it("should traverse through in order", () => {
        const spy = jest.spyOn(console, 'log');

        bst.add(5);
        bst.add(10);
        bst.traverseInOrder(bst.root);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(2);
    });
})