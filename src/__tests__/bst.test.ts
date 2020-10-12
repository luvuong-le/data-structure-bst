import Node from '@modules/Node';
import BST from "@modules/BST";

let bst: BST;

beforeEach((done) => {
  bst = new BST();
  done();
})

describe("Binary Search Tree", () => {
  it("should instantiate an instance of BST", () => {
    expect(bst instanceof BST).toBe(true);
  });

  it("should add a new node", () => {
    bst.add(5);
    bst.add(2);
    bst.add(1);
    bst.add(8);
    bst.add(10);
    bst.add(10);
    expect(bst.size()).toBeGreaterThan(0);
  });

  it("should search for a node", () => {
    bst.add(5);
    bst.add(2);
    bst.add(8);
    const nodeSearch = bst.search(5);
    const nodeSearchLower = bst.search(2);
    const nodeSearchGreater = bst.search(8);

    expect(nodeSearch instanceof Node).toBe(true);
    expect(nodeSearch.data).toBe(5);
    expect(nodeSearchLower.data).toBe(2);
    expect(nodeSearchGreater.data).toBe(8);
  });

  it("should traverse through in order", () => {
    const spy = jest.spyOn(console, 'log');

    bst.add(5);
    bst.add(10);
    bst.traverseInOrder(bst.root);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should traverse through pre order", () => {
    const spy = jest.spyOn(console, 'log');
    bst.traversePreOrder(bst.root);

    bst.add(5);
    bst.add(10);
    bst.traversePreOrder(bst.root);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should traverse through post order", () => {
    const spy = jest.spyOn(console, 'log');

    bst.add(5);
    bst.add(10);
    bst.traversePostOrder(bst.root);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
  });
})
